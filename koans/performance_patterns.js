window.KOANS_PERFORMANCE_PATTERNS = [
    {
        id: "performance_patterns_1",
        title: "Vectorized Over Loops",
        description: "The loop is a winding path; the vector is a straight one.",
        code: "a = np.array([1, 2, 3, 4, 5])\ntotal = (a ** 2).sum()\nassert total == __, \"Not quite\"",
        solution: "55",
        test: "",
        hint: "Square each element: 1, 4, 9, 16, 25. Then sum them."
    },
    {
        id: "performance_patterns_2",
        title: "Insertion Points with searchsorted",
        description: "To search a sorted array, divide and conquer.",
        code: "sorted_arr = np.array([10, 20, 30, 40, 50])\nidx = np.searchsorted(sorted_arr, 25)\nassert idx == __, \"Not quite\"",
        solution: "2",
        test: "",
        hint: "searchsorted returns the index where 25 would be inserted to keep the array sorted. It would go between 20 (index 1) and 30 (index 2)."
    },
    {
        id: "performance_patterns_3",
        title: "searchsorted with Multiple Values",
        description: "Many seekers, each finding their place in line.",
        code: "sorted_arr = np.array([1, 3, 5, 7, 9])\nindices = np.searchsorted(sorted_arr, [2, 5, 8])\nassert list(indices) == __, \"Not quite\"",
        solution: "[1, 2, 4]",
        test: "",
        hint: "2 inserts at index 1 (between 1 and 3). 5 inserts at index 2 (before the existing 5). 8 inserts at index 4 (between 7 and 9)."
    },
    {
        id: "performance_patterns_4",
        title: "Unique Elements",
        description: "Many voices speak, but only the distinct ones are heard.",
        code: "arr = np.array([3, 1, 2, 1, 3, 3, 2])\nunique_vals = np.unique(arr)\nassert list(unique_vals) == __, \"Not quite\"",
        solution: "[1, 2, 3]",
        test: "",
        hint: "np.unique returns sorted unique elements. Which values appear at least once?"
    },
    {
        id: "performance_patterns_5",
        title: "Bin Data with digitize",
        description: "Each grain of sand finds its place between the lines.",
        code: "bins = np.array([0, 10, 20, 30])\nvalues = np.array([5, 15, 25, 35])\nbin_indices = np.digitize(values, bins)\nassert list(bin_indices) == __, \"Not quite\"",
        solution: "[1, 2, 3, 3]",
        test: "",
        hint: "digitize returns which bin each value falls into. 5 is in [0,10) so bin 1. 15 is in [10,20) so bin 2. 25 is in [20,30) so bin 3. 35 is past the last edge, also bin 3."
    },
    {
        id: "performance_patterns_6",
        title: "Clip Values to a Range",
        description: "Clip the wings and the bird stays near.",
        code: "arr = np.array([1, 5, 10, 15, 20])\nclipped = np.clip(arr, 5, 15)\nassert list(clipped) == __, \"Not quite\"",
        solution: "[5, 5, 10, 15, 15]",
        test: "",
        hint: "clip(arr, 5, 15) pushes values below 5 up to 5, and values above 15 down to 15. Values in range stay as-is."
    },
    {
        id: "performance_patterns_7",
        title: "Consecutive Differences",
        description: "Between each step lies a lesson in change.",
        code: "arr = np.array([1, 3, 7, 8, 12])\ndifferences = np.diff(arr)\nassert list(differences) == __, \"Not quite\"",
        solution: "[2, 4, 1, 4]",
        test: "",
        hint: "diff computes the difference between consecutive elements: 3-1, 7-3, 8-7, 12-8."
    },
    {
        id: "performance_patterns_8",
        title: "Membership Testing with isin",
        description: "Ask not 'who are you?' but 'are you one of us?'",
        code: "arr = np.array([1, 2, 3, 4, 5])\nmask = np.isin(arr, [2, 4, 6])\nassert list(mask) == __, \"Not quite\"",
        solution: "[False, True, False, True, False]",
        test: "",
        hint: "isin checks each element: is 1 in [2,4,6]? No. Is 2? Yes. Is 3? No. Is 4? Yes. Is 5? No."
    },
    {
        id: "performance_patterns_9",
        title: "Masked Arrays for Sentinels",
        description: "Hide the impurity and the stream runs clear.",
        code: "data = np.array([1, 2, -999, 4, 5])\nmasked = np.ma.masked_where(data == -999, data)\nmean_val = masked.mean()\nassert mean_val == __, \"Not quite\"",
        solution: "3.0",
        test: "",
        hint: "After masking -999, the remaining values are [1, 2, 4, 5]. Their mean is (1+2+4+5) / 4."
    },
    {
        id: "performance_patterns_10",
        title: "Conditional Selection with where",
        description: "The wise array chooses without hesitation: one path if true, another if false.",
        code: "arr = np.array([1, 2, 3, 4, 5, 6])\nresult = np.where((arr % 2 == 0) & (arr > 2), arr * 10, 0)\nassert list(result) == __, \"Not quite\"",
        solution: "[0, 0, 0, 40, 0, 60]",
        test: "",
        hint: "The condition is: even AND greater than 2. Only 4 and 6 qualify. They get multiplied by 10. Everything else becomes 0."
    }
];
