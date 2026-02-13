// NumPy Koans — App Logic (Zen style)
(function () {
    'use strict';

    let pyodide = null;
    let allKoans = [];
    let topics = [];
    let currentIndex = 0;
    let completed = new Set();

    const $ = (s) => document.querySelector(s);
    const overlay = $('#loading-overlay');
    const sidebar = $('#sidebar');
    const sidebarToggle = $('#sidebar-toggle');
    const sidebarTopics = $('#sidebar-topics');
    const progressBar = $('#progress-bar');
    const progressText = $('#progress-text');
    const category = $('#koan-category');
    const descEl = $('#koan-description');
    const codeBox = $('#code-box');
    const feedback = $('#feedback');
    const hintBtn = $('#hint-btn');
    const hintContent = $('#hint-content');

    function init() {
        loadProgress();
        buildKoanList();
        buildSidebar();
        navigateAndFocus(findFirstIncomplete());
        bindEvents();
        loadPyodide();
    }

    function buildKoanList() {
        topics = window.NUMPY_KOANS_TOPICS || [];
        allKoans = [];
        topics.forEach((topic) => {
            topic.koans.forEach((k) => {
                allKoans.push({
                    ...k,
                    topicId: topic.id,
                    topicTitle: topic.title,
                    difficulty: topic.difficulty
                });
            });
        });
    }

    function findFirstIncomplete() {
        const idx = allKoans.findIndex((k) => !completed.has(k.id));
        return idx === -1 ? 0 : idx;
    }

    // ---- Pyodide ----
    async function loadPyodide() {
        try {
            overlay.querySelector('.loading-text').textContent = 'Loading Python runtime\u2026';
            pyodide = await globalThis.loadPyodide();
            overlay.querySelector('.loading-text').textContent = 'Loading NumPy\u2026';
            await pyodide.loadPackage('numpy');
            pyodide.runPython('import numpy as np');
            overlay.classList.add('hidden');
        } catch (e) {
            overlay.querySelector('.loading-text').textContent = 'Failed to load environment';
            overlay.querySelector('.loading-subtext').textContent = e.message;
        }
    }

    // ---- Sidebar ----
    function buildSidebar() {
        sidebarTopics.innerHTML = '';
        let currentDifficulty = '';

        topics.forEach((topic) => {
            if (topic.difficulty !== currentDifficulty) {
                currentDifficulty = topic.difficulty;
                const label = document.createElement('div');
                label.className = 'difficulty-label';
                label.textContent = currentDifficulty;
                sidebarTopics.appendChild(label);
            }

            const group = document.createElement('div');
            group.className = 'topic-group';
            group.dataset.topicId = topic.id;

            const completedCount = topic.koans.filter((k) => completed.has(k.id)).length;

            group.innerHTML = `
                <div class="topic-header">
                    <div class="topic-header-left">
                        <svg class="topic-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span class="topic-name">${topic.title}</span>
                    </div>
                    <span class="topic-progress">${completedCount}/${topic.koans.length}</span>
                </div>
                <div class="topic-koans">
                    ${topic.koans.map((k) => {
                        const globalIdx = allKoans.findIndex((ak) => ak.id === k.id);
                        const isDone = completed.has(k.id);
                        return `
                        <div class="koan-item${isDone ? ' completed' : ''}" data-index="${globalIdx}">
                            <div class="koan-check">
                                <svg class="koan-check-icon" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M2 5.5l2 2 4-4.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <span class="koan-item-title">${k.title}</span>
                        </div>`;
                    }).join('')}
                </div>
            `;
            sidebarTopics.appendChild(group);
        });

        sidebarTopics.addEventListener('click', (e) => {
            const header = e.target.closest('.topic-header');
            if (header) { header.closest('.topic-group').classList.toggle('collapsed'); return; }
            const item = e.target.closest('.koan-item');
            if (item) navigateTo(parseInt(item.dataset.index, 10));
        });
    }

    function updateSidebar() {
        topics.forEach((topic) => {
            const group = sidebarTopics.querySelector(`[data-topic-id="${topic.id}"]`);
            if (!group) return;
            const completedCount = topic.koans.filter((k) => completed.has(k.id)).length;
            group.querySelector('.topic-progress').textContent = `${completedCount}/${topic.koans.length}`;
            topic.koans.forEach((k) => {
                const globalIdx = allKoans.findIndex((ak) => ak.id === k.id);
                const item = group.querySelector(`[data-index="${globalIdx}"]`);
                if (item) item.classList.toggle('completed', completed.has(k.id));
            });
        });

        sidebarTopics.querySelectorAll('.koan-item').forEach((el) => {
            el.classList.toggle('active', parseInt(el.dataset.index, 10) === currentIndex);
        });

        const activeItem = sidebarTopics.querySelector('.koan-item.active');
        if (activeItem) {
            activeItem.closest('.topic-group')?.classList.remove('collapsed');
            activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }

        const total = allKoans.length;
        const done = completed.size;
        progressBar.style.width = (total > 0 ? (done / total) * 100 : 0) + '%';
        progressText.textContent = `${done} / ${total} completed`;
    }

    // ---- Navigation ----
    function navigateTo(index) {
        if (index < 0 || index >= allKoans.length) return;
        currentIndex = index;
        const koan = allKoans[currentIndex];

        category.textContent = koan.topicTitle;
        descEl.textContent = koan.description;

        // Render code with inline inputs
        renderCodeBox(koan);

        feedback.className = 'feedback hidden';
        feedback.textContent = '';
        hintContent.classList.add('hidden');
        hintBtn.classList.remove('open');
        hintContent.innerHTML = formatText(koan.hint || '');

        updateSidebar();

        // Re-trigger animation
        const container = document.querySelector('.koan-container');
        container.style.animation = 'none';
        container.offsetHeight;
        container.style.animation = '';

    }

    function navigateAndFocus(index) {
        navigateTo(index);
        setTimeout(() => {
            const firstInput = codeBox.querySelector('.koan-input');
            if (firstInput) firstInput.focus();
        }, 50);
    }

    function renderCodeBox(koan) {
        codeBox.innerHTML = '';

        // Render the code template with inline inputs for __
        const codeLines = koan.code.split('\n');
        codeLines.forEach((line) => {
            const lineEl = document.createElement('span');
            lineEl.className = 'code-line';
            // Strip error messages from assert lines for cleaner display
            const displayLine = line.trimStart().startsWith('assert') ? cleanAssertLine(line) : line;
            renderLineWithInputs(lineEl, displayLine);
            codeBox.appendChild(lineEl);
        });

        // Show the assertion as dimmed lines
        if (koan.test) {
            const testLines = koan.test.split('\n');
            testLines.forEach((line) => {
                // Strip f-string error messages for cleaner display
                const clean = cleanAssertLine(line);
                const lineEl = document.createElement('span');
                lineEl.className = 'code-line assertion';
                lineEl.textContent = clean;
                codeBox.appendChild(lineEl);
            });
        }
    }

    function renderLineWithInputs(container, line) {
        const parts = line.split('__');
        parts.forEach((part, i) => {
            container.appendChild(document.createTextNode(part));
            if (i < parts.length - 1) {
                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'koan-input';
                input.spellcheck = false;
                input.autocomplete = 'off';
                // Auto-size
                input.addEventListener('input', () => autoSizeInput(input));
                // Enter to submit
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') { e.preventDefault(); runKoan(); }
                });
                container.appendChild(input);
            }
        });
    }

    function autoSizeInput(input) {
        const defaultW = 120;
        // Measure text width using a hidden span
        const measure = document.createElement('span');
        measure.style.cssText = 'position:absolute;visibility:hidden;white-space:pre;font:inherit';
        measure.textContent = input.value || '';
        input.parentNode.appendChild(measure);
        const textW = measure.offsetWidth + 16;
        // Only grow beyond default, never shrink below it
        input.style.width = Math.max(defaultW, textW) + 'px';
        measure.remove();
    }

    function cleanAssertLine(line) {
        // Remove trailing error messages: assert expr, "msg" → assert expr
        return line.replace(/,\s*f?(['"]).*\1\s*$/, '').trim();
    }

    function formatText(text) {
        return text.replace(/`([^`]+)`/g, '<code>$1</code>');
    }

    function fadeToKoan(index) {
        const container = document.querySelector('.koan-container');
        container.classList.add('fading');
        setTimeout(() => {
            navigateAndFocus(index);
            container.classList.remove('fading');
        }, 250);
    }

    // ---- Run Koan ----
    async function runKoan() {
        if (!pyodide) {
            showFeedback('error', 'Python is still loading\u2026');
            return;
        }

        const koan = allKoans[currentIndex];
        const inputs = codeBox.querySelectorAll('.koan-input');

        // Build code by substituting inputs
        let code = koan.code;
        let hasEmpty = false;
        inputs.forEach((input) => {
            if (!input.value.trim()) hasEmpty = true;
            code = code.replace('__', input.value);
        });

        if (hasEmpty) {
            inputs.forEach(i => { if (!i.value.trim()) i.classList.add('wrong'); });
            return;
        }

        // Clear previous assertion highlights
        codeBox.querySelectorAll('.assertion').forEach(el => el.classList.remove('failed'));

        try {
            pyodide.runPython(code);

            // Run each assertion line separately to identify which fails
            const testLines = koan.test.split('\n').filter(l => l.trim());
            const assertionEls = codeBox.querySelectorAll('.assertion');
            let failed = false;

            for (let i = 0; i < testLines.length; i++) {
                try {
                    pyodide.runPython(testLines[i]);
                } catch (testErr) {
                    failed = true;
                    inputs.forEach(inp => { inp.classList.remove('correct'); inp.classList.add('wrong'); });
                    if (assertionEls[i]) assertionEls[i].classList.add('failed');
                    showFeedback('error', extractPythonError(testErr.message));
                    break;
                }
            }

            if (!failed) {
                // Success — mark complete and fade to next
                completed.add(koan.id);
                saveProgress();
                updateSidebar();
                inputs.forEach(i => { i.classList.remove('wrong'); i.classList.add('correct'); i.disabled = true; });
                feedback.className = 'feedback hidden';

                setTimeout(() => {
                    if (currentIndex < allKoans.length - 1) {
                        fadeToKoan(currentIndex + 1);
                    }
                }, 600);
            }
        } catch (err) {
            inputs.forEach(i => { i.classList.remove('correct'); i.classList.add('wrong'); });
            showFeedback('error', extractPythonError(err.message));
        }
    }

    function extractPythonError(msg) {
        const lines = msg.trim().split('\n');
        for (let i = lines.length - 1; i >= 0; i--) {
            const line = lines[i].trim();
            if (line) {
                // "AssertionError: Not quite" → "Not quite"
                const assertMatch = line.match(/^AssertionError:\s*(.+)/);
                if (assertMatch) return assertMatch[1];
                // Bare "AssertionError" → generic message
                if (line === 'AssertionError') return 'Not quite';
                return line;
            }
        }
        return msg;
    }

    function showFeedback(type, message) {
        feedback.className = `feedback ${type}`;
        feedback.textContent = message;
    }

    // ---- Progress ----
    function loadProgress() {
        try {
            const data = localStorage.getItem('numpy_koans_completed');
            if (data) completed = new Set(JSON.parse(data));
        } catch (e) { completed = new Set(); }
    }

    function saveProgress() {
        try {
            localStorage.setItem('numpy_koans_completed', JSON.stringify([...completed]));
        } catch (e) { /* ignore */ }
    }

    // ---- Events ----
    function bindEvents() {
        hintBtn.addEventListener('click', () => {
            const isHidden = hintContent.classList.toggle('hidden');
            hintBtn.classList.toggle('open', !isHidden);
        });
        sidebarToggle.addEventListener('click', () => sidebar.classList.toggle('collapsed'));

        // Keyboard nav
        document.addEventListener('keydown', (e) => {
            // Don't capture when typing in input
            if (e.target.classList.contains('koan-input')) return;

            if (e.key === 'ArrowRight' || e.key === 'n') {
                navigateTo(currentIndex + 1);
            } else if (e.key === 'ArrowLeft' || e.key === 'p') {
                navigateTo(currentIndex - 1);
            }
        });
    }

    // ---- Start ----
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
