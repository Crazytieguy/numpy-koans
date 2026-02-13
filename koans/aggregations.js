window.KOANS_AGGREGATIONS = [
    {
        id: "aggregations_1",
        title: "Sum of All Elements",
        description: "The whole is the sum of its parts.",
        code: "a = np.array([1, 2, 3, 4, 5])\nassert np.sum(a) == __",
        solution: "15",
        test: "",
        hint: "Add up all the elements: 1 + 2 + 3 + 4 + 5 = 15."
    },
    {
        id: "aggregations_2",
        title: "Mean of an Array",
        description: "To find the center, one must consider all.",
        code: "a = np.array([2, 4, 6, 8, 10])\nassert np.mean(a) == __",
        solution: "6.0",
        test: "",
        hint: "The mean is the sum divided by the count: (2 + 4 + 6 + 8 + 10) / 5 = 6.0."
    },
    {
        id: "aggregations_3",
        title: "Maximum",
        description: "The peak defines the range.",
        code: "a = np.array([3, 7, 2, 9, 1])\nassert np.max(a) == __",
        solution: "9",
        test: "",
        hint: "Find the largest value in the array."
    },
    {
        id: "aggregations_4",
        title: "Index of the Maximum",
        description: "To know the tallest mountain, learn where it stands.",
        code: "a = np.array([3, 7, 2, 9, 1])\nassert np.argmax(a) == __",
        solution: "3",
        test: "",
        hint: "Which position (starting from 0) holds the largest value? 3, 7, 2, 9, 1 — the 9 is at index 3."
    },
    {
        id: "aggregations_5",
        title: "Index of the Minimum",
        description: "Even the lowest point has an address.",
        code: "a = np.array([5, 3, 8, 1, 6])\nassert np.argmin(a) == __",
        solution: "3",
        test: "",
        hint: "Which position holds the smallest value? 5, 3, 8, 1, 6 — the 1 is at index 3."
    },
    {
        id: "aggregations_6",
        title: "Variance",
        description: "When all voices sing the same note, there is no discord.",
        code: "a = np.array([4, 4, 4, 4])\nassert np.var(a) == __",
        solution: "0.0",
        test: "",
        hint: "When every element is the same, they don't vary at all. Variance is 0."
    },
    {
        id: "aggregations_7",
        title: "Standard Deviation",
        description: "How far does each voice stray from the chorus?",
        code: "a = np.array([2, 6])\nassert np.std(a) == __",
        solution: "2.0",
        test: "",
        hint: "Mean is 4. Deviations: 2-4=-2 and 6-4=2. Squared: 4 and 4. Mean of squares: 4. Square root: 2.0."
    },
    {
        id: "aggregations_8",
        title: "Cumulative Sum",
        description: "Each step carries the weight of all before it.",
        code: "a = np.array([1, 2, 3, 4])\nassert list(np.cumsum(a)) == __",
        solution: "[1, 3, 6, 10]",
        test: "",
        hint: "Build a running total: 1, then 1+2=3, then 3+3=6, then 6+4=10."
    },
    {
        id: "aggregations_9",
        title: "Cumulative Product",
        description: "One seed multiplied becomes a forest.",
        code: "a = np.array([1, 2, 3, 4])\nassert list(np.cumprod(a)) == __",
        solution: "[1, 2, 6, 24]",
        test: "",
        hint: "Build a running product: 1, then 1*2=2, then 2*3=6, then 6*4=24."
    },
    {
        id: "aggregations_10",
        title: "Sum Along Columns",
        description: "Collapse a dimension and what remains tells a story.",
        code: "a = np.array([[1, 2, 3],\n              [4, 5, 6]])\nassert list(np.sum(a, axis=0)) == __",
        solution: "[5, 7, 9]",
        test: "",
        hint: "axis=0 collapses the rows. Add each column: 1+4=5, 2+5=7, 3+6=9."
    },
    {
        id: "aggregations_11",
        title: "Sum Along Rows",
        description: "Turn the lens, and the story changes.",
        code: "a = np.array([[1, 2, 3],\n              [4, 5, 6]])\nassert list(np.sum(a, axis=1)) == __",
        solution: "[6, 15]",
        test: "",
        hint: "axis=1 collapses the columns. Add each row: 1+2+3=6, 4+5+6=15."
    },
    {
        id: "aggregations_12",
        title: "Keeping Dimensions",
        description: "Reduce, but remember the shape of what was lost.",
        code: "a = np.array([[1, 2, 3],\n              [4, 5, 6]])\nrow_means = np.mean(a, axis=1, keepdims=True)\nassert row_means.shape == __",
        solution: "(2, 1)",
        test: "assert np.allclose(row_means, [[2.0], [5.0]]), 'Row means should be [[2.0], [5.0]]'",
        hint: "keepdims=True preserves the reduced axis as size 1. The original (2, 3) with axis=1 reduced becomes (2, 1)."
    }
];
