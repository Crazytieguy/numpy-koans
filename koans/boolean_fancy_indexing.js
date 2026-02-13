window.KOANS_BOOLEAN_FANCY_INDEXING = [
    {
        id: "boolean_fancy_1",
        title: "The Simplest Mask",
        description: "Truth is the finest filter.",
        code: "a = np.array([10, 20, 30, 40, 50])\nassert list(a[a > 25]) == __",
        solution: "[30, 40, 50]",
        test: "",
        hint: "The comparison a > 25 gives [False, False, True, True, True]. Only elements where True survive."
    },
    {
        id: "boolean_fancy_2",
        title: "Reading the Mask",
        description: "Before the selection, there is the seeing.",
        code: "a = np.array([3, 7, 2, 9, 5])\nassert list(a >= 5) == __",
        solution: "[False, True, False, True, True]",
        test: "",
        hint: "Compare each element to 5: 3>=5? No. 7>=5? Yes. 2>=5? No. 9>=5? Yes. 5>=5? Yes."
    },
    {
        id: "boolean_fancy_3",
        title: "Counting True Values",
        description: "To count what is true, sum the light from each lantern.",
        code: "a = np.array([5, 12, 8, 15, 3, 20])\nassert np.sum(a > 10) == __",
        solution: "3",
        test: "",
        hint: "True counts as 1, False as 0. Elements exceeding 10: 12, 15, 20 — three of them."
    },
    {
        id: "boolean_fancy_4",
        title: "Where Truth Dwells",
        description: "Ask where truth dwells, and you shall receive its address.",
        code: "a = np.array([10, 25, 30, 15, 40])\nassert list(np.where(a > 20)[0]) == __",
        solution: "[1, 2, 4]",
        test: "",
        hint: "np.where returns the indices where the condition is True. Which positions hold values above 20?"
    },
    {
        id: "boolean_fancy_5",
        title: "The Fork in the Path",
        description: "One path for the true, another for the false.",
        code: "a = np.array([10, 20, 30, 40])\nassert list(np.where(a > 25, -1, a)) == __",
        solution: "[10, 20, -1, -1]",
        test: "",
        hint: "Where the condition is True, use -1. Where False, keep the original value."
    },
    {
        id: "boolean_fancy_6",
        title: "Fancy Indexing",
        description: "Point to what you seek, and it shall be given.",
        code: "a = np.array([100, 200, 300, 400, 500])\nindices = np.array([0, 2, 4])\nassert list(a[indices]) == __",
        solution: "[100, 300, 500]",
        test: "",
        hint: "Index 0 gives 100, index 2 gives 300, index 4 gives 500."
    },
    {
        id: "boolean_fancy_7",
        title: "Combining Conditions with AND",
        description: "Both gates must open before you may pass.",
        code: "a = np.array([5, 15, 25, 35, 45])\nassert list(a[(a > 10) & (a < 40)]) == __",
        solution: "[15, 25, 35]",
        test: "",
        hint: "An element must be greater than 10 AND less than 40. Check each one."
    },
    {
        id: "boolean_fancy_8",
        title: "Combining Conditions with OR",
        description: "Either path leads to the garden.",
        code: "a = np.array([10, 20, 30, 40, 50])\nassert list(a[(a < 15) | (a > 35)]) == __",
        solution: "[10, 40, 50]",
        test: "",
        hint: "An element passes if it is less than 15 OR greater than 35."
    },
    {
        id: "boolean_fancy_9",
        title: "Negating a Mask",
        description: "The inverse of seeing is also a kind of sight.",
        code: "a = np.array([8, 12, 15, 20, 25])\nmask = a > 14\nassert list(a[~mask]) == __",
        solution: "[8, 12]",
        test: "",
        hint: "The mask selects [15, 20, 25]. The negation ~ selects everything else: [8, 12]."
    },
    {
        id: "boolean_fancy_10",
        title: "Any True?",
        description: "One voice is enough to break the silence.",
        code: "a = np.array([2, 4, 6, 8])\nassert np.any(a > 7) == __",
        solution: "True",
        test: "assert not np.any(a > 10), 'No element exceeds 10'",
        hint: "np.any returns True if at least one element passes. Is any element > 7? Yes, 8 is."
    },
    {
        id: "boolean_fancy_11",
        title: "All True?",
        description: "Only when every voice agrees does the chorus hold.",
        code: "a = np.array([10, 20, 30, 40])\nassert np.all(a > 5) == __",
        solution: "True",
        test: "assert not np.all(a > 15), 'Not all elements exceed 15'",
        hint: "np.all returns True only if every element passes. Are all elements > 5? Yes."
    },
    {
        id: "boolean_fancy_12",
        title: "Assignment by Mask",
        description: "To name what is chosen is to transform it.",
        code: "a = np.array([10, 20, 30, 40, 50])\na[a > 25] = 0\nassert list(a) == __",
        solution: "[10, 20, 0, 0, 0]",
        test: "",
        hint: "Elements greater than 25 are replaced with 0. The rest remain unchanged."
    }
];
