window.KOANS_BOOLEAN_FANCY_INDEXING = [
    {
        id: "boolean_fancy_1",
        title: "The Simplest Mask",
        description: "Truth is the finest filter.",
        code: "a = np.array([10, 20, 30, 40, 50])\nmask = a > 25\nselected = a[mask]\nassert list(selected) == __",
        solution: "[30, 40, 50]",
        test: "",
        hint: "The mask is [False, False, True, True, True]. Only elements where the mask is True survive."
    },
    {
        id: "boolean_fancy_2",
        title: "Reading the Mask Itself",
        description: "Before the selection, there is the seeing.",
        code: "a = np.array([3, 7, 2, 9, 5])\nmask = a >= 5\nassert list(mask) == __",
        solution: "[False, True, False, True, True]",
        test: "",
        hint: "Compare each element to 5. Is 3 >= 5? Is 7 >= 5? And so on."
    },
    {
        id: "boolean_fancy_3",
        title: "Counting True Values",
        description: "To count what is true, sum the light from each lantern.",
        code: "a = np.array([5, 12, 8, 15, 3, 20])\nmask = a > 10\ncount = np.sum(mask)\nassert count == __",
        solution: "3",
        test: "",
        hint: "True counts as 1, False as 0. How many elements exceed 10?"
    },
    {
        id: "boolean_fancy_4",
        title: "Where Truth Dwells",
        description: "Ask where truth dwells, and you shall receive its address.",
        code: "a = np.array([10, 25, 30, 15, 40])\nindices = np.where(a > 20)[0]\nassert list(indices) == __",
        solution: "[1, 2, 4]",
        test: "",
        hint: "np.where returns the indices where the condition is True. Which positions hold values above 20?"
    },
    {
        id: "boolean_fancy_5",
        title: "The Fork in the Path",
        description: "One way for the true, another for the false.",
        code: "a = np.array([10, 20, 30, 40])\nresult = np.where(a > 25, -1, a)\nassert list(result) == __",
        solution: "[10, 20, -1, -1]",
        test: "",
        hint: "Where the condition is True, use -1. Where False, keep the original value."
    },
    {
        id: "boolean_fancy_6",
        title: "Fancy Indexing",
        description: "Point to what you seek, and it shall be given.",
        code: "a = np.array([100, 200, 300, 400, 500])\nindices = np.array([0, 2, 4])\nselected = a[indices]\nassert list(selected) == __",
        solution: "[100, 300, 500]",
        test: "",
        hint: "Index 0 gives 100, index 2 gives 300, index 4 gives 500."
    },
    {
        id: "boolean_fancy_7",
        title: "Two Gates",
        description: "Both open — only then may you pass.",
        code: "a = np.array([5, 15, 25, 35, 45])\nmask = (a > 10) & (a < 40)\nselected = a[mask]\nassert list(selected) == __",
        solution: "[15, 25, 35]",
        test: "",
        hint: "An element must be greater than 10 AND less than 40. Check each one."
    },
    {
        id: "boolean_fancy_8",
        title: "Either Path",
        description: "Either path leads to the garden.",
        code: "a = np.array([10, 20, 30, 40, 50])\nmask = (a < 15) | (a > 35)\nselected = a[mask]\nassert list(selected) == __",
        solution: "[10, 40, 50]",
        test: "",
        hint: "An element passes if it is less than 15 OR greater than 35."
    },
    {
        id: "boolean_fancy_9",
        title: "The Inverse",
        description: "The inverse of seeing is also a kind of sight.",
        code: "a = np.array([8, 12, 15, 20, 25])\nmask = a > 14\ninverse = a[~mask]\nassert list(inverse) == __",
        solution: "[8, 12]",
        test: "",
        hint: "The mask selects [15, 20, 25]. The negation ~ selects everything else."
    },
    {
        id: "boolean_fancy_10",
        title: "Any Voice in the Chorus",
        description: "One voice is enough to break the silence.",
        code: "a = np.array([2, 4, 6, 8])\nresult_a = np.any(a > 7)\nresult_b = np.any(a > 10)\nassert result_a == __\nassert result_b == __",
        solution: "True\nFalse",
        test: "",
        hint: "np.any is True if at least one element passes. Is any element > 7? Is any element > 10?"
    },
    {
        id: "boolean_fancy_11",
        title: "Every Stone Must Agree",
        description: "Only when every stone agrees does the arch hold.",
        code: "a = np.array([10, 20, 30, 40])\nresult_a = np.all(a > 5)\nresult_b = np.all(a > 15)\nassert result_a == __\nassert result_b == __",
        solution: "True\nFalse",
        test: "",
        hint: "np.all is True only if every element passes. Are all > 5? Are all > 15?"
    },
    {
        id: "boolean_fancy_12",
        title: "Transformation by Mask",
        description: "To name what is chosen is to transform it.",
        code: "a = np.array([10, 20, 30, 40, 50])\na[a > 25] = 0\nassert list(a) == __",
        solution: "[10, 20, 0, 0, 0]",
        test: "",
        hint: "Elements greater than 25 are replaced with 0. The rest remain unchanged."
    }
];
