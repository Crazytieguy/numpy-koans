window.KOANS_INDEXING_SLICING = [
    {
        id: "indexing_slicing_1",
        title: "First Element",
        description: "Every journey begins at index zero.",
        code: "a = np.array([10, 20, 30, 40, 50])\nv = a[__]",
        solution: "0",
        test: "assert v == 10, 'Expected 10'",
        hint: "Array indices start at 0."
    },
    {
        id: "indexing_slicing_2",
        title: "Reading an Index",
        description: "Point to a position and see what lives there.",
        code: "a = np.array([5, 15, 25, 35, 45])\nassert a[3] == __",
        solution: "35",
        test: "",
        hint: "Index 3 means the fourth element (counting from 0): 5, 15, 25, 35."
    },
    {
        id: "indexing_slicing_3",
        title: "Counting from the End",
        description: "Some paths are walked in reverse.",
        code: "a = np.array([100, 200, 300, 400, 500])\nv = a[__]",
        solution: "-1",
        test: "assert v == 500, 'Expected 500'",
        hint: "Negative indices count from the end: -1 is the last element."
    },
    {
        id: "indexing_slicing_4",
        title: "Negative Index",
        description: "To look backward is still to look.",
        code: "a = np.array([10, 20, 30, 40, 50])\nassert a[-2] == __",
        solution: "40",
        test: "",
        hint: "-1 is the last element (50), -2 is the one before it (40)."
    },
    {
        id: "indexing_slicing_5",
        title: "A Simple Slice",
        description: "A window reveals only part of the whole.",
        code: "a = np.array([10, 20, 30, 40, 50, 60, 70])\nv = a[__]",
        solution: "2:5",
        test: "assert np.array_equal(v, [30, 40, 50]), 'Expected [30, 40, 50]'",
        hint: "Use start:stop notation. The stop index is exclusive."
    },
    {
        id: "indexing_slicing_6",
        title: "Reading a Slice",
        description: "The river does not show all its water at once.",
        code: "a = np.array([1, 2, 3, 4, 5, 6])\nassert list(a[1:4]) == __",
        solution: "[2, 3, 4]",
        test: "",
        hint: "a[1:4] takes elements at indices 1, 2, 3. The stop index is exclusive."
    },
    {
        id: "indexing_slicing_7",
        title: "Slice with a Step",
        description: "One stone placed, one stone skipped.",
        code: "a = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8])\nassert list(a[::2]) == __",
        solution: "[0, 2, 4, 6, 8]",
        test: "",
        hint: "::2 takes every second element starting from index 0."
    },
    {
        id: "indexing_slicing_8",
        title: "Reversing an Array",
        description: "The same stones, read from the other end.",
        code: "a = np.array([1, 2, 3, 4, 5])\nv = a[__]",
        solution: "::-1",
        test: "assert np.array_equal(v, [5, 4, 3, 2, 1]), 'Expected [5, 4, 3, 2, 1]'",
        hint: "A step of -1 reverses the array: start:stop:step becomes ::-1."
    },
    {
        id: "indexing_slicing_9",
        title: "2D Indexing",
        description: "To find one grain, know its row and column.",
        code: "a = np.array([[10, 20, 30],\n              [40, 50, 60],\n              [70, 80, 90]])\nv = a[__]",
        solution: "1, 2",
        test: "assert v == 60, 'Expected 60'",
        hint: "Use [row, column]. Rows and columns both start at 0."
    },
    {
        id: "indexing_slicing_10",
        title: "Extracting a Row",
        description: "A single thread can be pulled from the weave.",
        code: "a = np.array([[1, 2, 3],\n              [4, 5, 6],\n              [7, 8, 9]])\nassert list(a[2]) == __",
        solution: "[7, 8, 9]",
        test: "",
        hint: "A single index on a 2D array selects an entire row."
    },
    {
        id: "indexing_slicing_11",
        title: "Extracting a Column",
        description: "A pillar stands through every floor.",
        code: "a = np.array([[1, 2, 3],\n              [4, 5, 6],\n              [7, 8, 9]])\nv = a[__]",
        solution: ":, 1",
        test: "assert np.array_equal(v, [2, 5, 8]), 'Expected [2, 5, 8]'",
        hint: "Use [:, col] — the : selects all rows, and 1 selects the second column."
    }
];
