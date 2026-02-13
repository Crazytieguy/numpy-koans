window.KOANS_AGGREGATIONS = [
    {
        id: "aggregations_1",
        title: "Sum of All Elements",
        description: "The whole is the sum of its parts.",
        code: "a = np.array([1, 2, 3, 4, 5])\ntotal = np.sum(a)\nassert total == __, \"Not quite\"",
        solution: "15",
        test: "",
        hint: "Add up all the elements: 1 + 2 + 3 + 4 + 5."
    },
    {
        id: "aggregations_2",
        title: "Mean of an Array",
        description: "To find the center, one must consider all.",
        code: "a = np.array([2, 4, 6, 8, 10])\navg = np.mean(a)\nassert avg == __, \"Not quite\"",
        solution: "6.0",
        test: "",
        hint: "The mean is the sum divided by the count: (2 + 4 + 6 + 8 + 10) / 5."
    },
    {
        id: "aggregations_3",
        title: "Maximum and Minimum",
        description: "The peak and the valley define the range.",
        code: "a = np.array([3, 7, 2, 9, 1])\nassert np.max(a) == __",
        solution: "9",
        test: "assert np.min(a) == 1, \"The minimum of [3, 7, 2, 9, 1] is 1\"",
        hint: "Find the largest value in the array."
    },
    {
        id: "aggregations_4",
        title: "Index of the Maximum",
        description: "To know the tallest mountain, learn where it stands.",
        code: "a = np.array([3, 7, 2, 9, 1])\nassert np.argmax(a) == __, \"Not quite\"",
        solution: "3",
        test: "",
        hint: "Which position (starting from 0) holds the largest value?"
    },
    {
        id: "aggregations_5",
        title: "Index of the Minimum",
        description: "Even the lowest point has an address.",
        code: "a = np.array([5, 3, 8, 1, 6])\nassert np.argmin(a) == __, \"Not quite\"",
        solution: "3",
        test: "",
        hint: "Which position (starting from 0) holds the smallest value?"
    },
    {
        id: "aggregations_6",
        title: "Variance",
        description: "The square of discord reveals the spread within.",
        code: "a = np.array([4, 4, 4, 4])\nassert np.var(a) == __, \"Not quite\"",
        solution: "0.0",
        test: "",
        hint: "When every element is the same, how much do they vary?"
    },
    {
        id: "aggregations_7",
        title: "Standard Deviation",
        description: "How far does each voice stray from the chorus?",
        code: "a = np.array([5, 5, 5, 5, 5])\nassert np.std(a) == __, \"Not quite\"",
        solution: "0.0",
        test: "",
        hint: "When all values are identical, the standard deviation is zero."
    },
    {
        id: "aggregations_8",
        title: "Cumulative Sum",
        description: "Each step carries the weight of all before it.",
        code: "a = np.array([1, 2, 3, 4])\nrunning = np.cumsum(a)\nassert list(running) == __, \"Not quite\"",
        solution: "[1, 3, 6, 10]",
        test: "",
        hint: "Build a running total: 1, then 1+2, then 1+2+3, then 1+2+3+4."
    },
    {
        id: "aggregations_9",
        title: "Cumulative Product",
        description: "One seed multiplied becomes a forest.",
        code: "a = np.array([1, 2, 3, 4])\ngrowth = np.cumprod(a)\nassert list(growth) == __, \"Not quite\"",
        solution: "[1, 2, 6, 24]",
        test: "",
        hint: "Build a running product: 1, then 1*2, then 1*2*3, then 1*2*3*4."
    },
    {
        id: "aggregations_10",
        title: "Sum Along Columns",
        description: "Collapse a dimension and what remains tells a story.",
        code: "a = np.array([[1, 2, 3],\n              [4, 5, 6]])\ncolumn_sums = np.sum(a, axis=0)\nassert list(column_sums) == __, \"Not quite\"",
        solution: "[5, 7, 9]",
        test: "",
        hint: "axis=0 collapses the rows. Add each column: 1+4, 2+5, 3+6."
    },
    {
        id: "aggregations_11",
        title: "Sum Along Rows",
        description: "Turn the lens, and the story changes.",
        code: "a = np.array([[1, 2, 3],\n              [4, 5, 6]])\nrow_sums = np.sum(a, axis=1)\nassert list(row_sums) == __, \"Not quite\"",
        solution: "[6, 15]",
        test: "",
        hint: "axis=1 collapses the columns. Add each row: 1+2+3, then 4+5+6."
    },
    {
        id: "aggregations_12",
        title: "Mean with keepdims",
        description: "Reduce, but remember the shape of what was lost.",
        code: "a = np.array([[1, 2, 3],\n              [4, 5, 6]])\nrow_means = np.mean(a, axis=1, keepdims=True)\nassert row_means.shape == __, \"Not quite\"",
        solution: "(2, 1)",
        test: "assert np.allclose(row_means, np.array([[2.0], [5.0]])), \"Row means should be [[2.0], [5.0]]\"",
        hint: "keepdims=True preserves the reduced axis as size 1. The original shape was (2, 3) and axis=1 was reduced."
    }
];
