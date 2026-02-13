window.KOANS_PERFORMANCE_PATTERNS = [
    {
        id: "performance_patterns_1",
        title: "Sorting",
        description: "To sort is to find order within chaos.",
        code: "a = np.array([3, 1, 4, 1, 5, 9])\nassert list(np.sort(a)) == __",
        solution: "[1, 1, 3, 4, 5, 9]",
        test: "",
        hint: "np.sort returns a sorted copy of the array, from smallest to largest."
    },
    {
        id: "performance_patterns_2",
        title: "Indices that Would Sort",
        description: "Before rearranging the stones, first learn where each must go.",
        code: "a = np.array([30, 10, 20])\nassert list(np.argsort(a)) == __",
        solution: "[1, 2, 0]",
        test: "",
        hint: "argsort returns the indices that would sort the array. Smallest (10) is at index 1, then 20 at index 2, then 30 at index 0."
    },
    {
        id: "performance_patterns_3",
        title: "Unique Elements",
        description: "Many voices speak, but only the distinct ones are heard.",
        code: "a = np.array([3, 1, 2, 1, 3, 3, 2])\nassert list(np.unique(a)) == __",
        solution: "[1, 2, 3]",
        test: "",
        hint: "np.unique returns sorted unique elements."
    },
    {
        id: "performance_patterns_4",
        title: "Insertion Point",
        description: "To find your place in line, look left and right.",
        code: "a = np.array([10, 20, 30, 40, 50])\nassert np.searchsorted(a, 25) == __",
        solution: "2",
        test: "",
        hint: "searchsorted returns the index where 25 would be inserted to keep the array sorted. It goes between 20 (index 1) and 30 (index 2)."
    },
    {
        id: "performance_patterns_5",
        title: "Binning with digitize",
        description: "Each grain of sand finds its place between the lines.",
        code: "bins = np.array([0, 10, 20, 30])\nvalues = np.array([5, 15, 25])\nassert list(np.digitize(values, bins)) == __",
        solution: "[1, 2, 3]",
        test: "",
        hint: "digitize returns which bin each value falls into. 5 is in [0, 10) so bin 1. 15 is in [10, 20) so bin 2. 25 is in [20, 30) so bin 3."
    },
    {
        id: "performance_patterns_6",
        title: "Clipping Values",
        description: "Clip the wings and the bird stays near.",
        code: "a = np.array([1, 5, 10, 15, 20])\nassert list(np.clip(a, 5, 15)) == __",
        solution: "[5, 5, 10, 15, 15]",
        test: "",
        hint: "clip pushes values below 5 up to 5, and values above 15 down to 15. Values in range stay as-is."
    },
    {
        id: "performance_patterns_7",
        title: "Consecutive Differences",
        description: "Between each step lies a measure of change.",
        code: "a = np.array([1, 3, 7, 8, 12])\nassert list(np.diff(a)) == __",
        solution: "[2, 4, 1, 4]",
        test: "",
        hint: "diff computes the difference between consecutive elements: 3-1, 7-3, 8-7, 12-8."
    },
    {
        id: "performance_patterns_8",
        title: "Membership Testing",
        description: "Ask not 'who are you?' but 'are you one of us?'",
        code: "a = np.array([1, 2, 3, 4, 5])\nassert list(np.isin(a, [2, 4, 6])) == __",
        solution: "[False, True, False, True, False]",
        test: "",
        hint: "isin checks each element: is 1 in [2,4,6]? No. Is 2? Yes. Is 3? No. Is 4? Yes. Is 5? No."
    },
    {
        id: "performance_patterns_9",
        title: "Masked Arrays",
        description: "Hide the impurity and the stream runs clear.",
        code: "data = np.array([1, 2, -999, 4, 5])\nmasked = np.ma.masked_where(data == -999, data)\nassert masked.mean() == __",
        solution: "3.0",
        test: "",
        hint: "After masking -999, the remaining values are [1, 2, 4, 5]. Their mean is (1+2+4+5) / 4 = 3.0."
    }
];
