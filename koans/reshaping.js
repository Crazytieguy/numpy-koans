window.KOANS_RESHAPING = [
    {
        id: "reshaping_1",
        title: "Reshape 1D to 2D",
        description: "To reshape is to see the same truth from a new angle.",
        code: "a = np.arange(6)\nb = a.reshape(2, 3)\nassert b.tolist() == __",
        solution: "[[0, 1, 2], [3, 4, 5]]",
        test: "",
        hint: "arange(6) gives [0, 1, 2, 3, 4, 5]. Reshaping to (2, 3) fills row by row: first row [0, 1, 2], second row [3, 4, 5]."
    },
    {
        id: "reshaping_2",
        title: "Reshape with -1",
        description: "Tell the master one dimension; the other reveals itself.",
        code: "a = np.arange(12)\nb = a.reshape(3, __)\nassert b.shape == (3, 4)",
        solution: "-1",
        test: "",
        hint: "Use -1 to let NumPy infer the missing dimension. 12 elements / 3 rows = 4 columns."
    },
    {
        id: "reshaping_3",
        title: "Flatten to 1D",
        description: "The mountain range, seen from above, becomes a single horizon.",
        code: "a = np.array([[1, 2, 3], [4, 5, 6]])\nb = a.flatten()\nassert list(b) == __",
        solution: "[1, 2, 3, 4, 5, 6]",
        test: "",
        hint: "flatten() collapses all dimensions into one, reading elements row by row."
    },
    {
        id: "reshaping_4",
        title: "Ravel Returns a View",
        description: "Flatten copies the scroll; ravel merely unrolls it.",
        code: "a = np.array([[10, 20], [30, 40]])\nb = a.ravel()\nb[0] = 99\nassert a[0, 0] == __",
        solution: "99",
        test: "",
        hint: "ravel() returns a view, not a copy. Changing b also changes a, because they share the same memory."
    },
    {
        id: "reshaping_5",
        title: "Transpose Shape",
        description: "What was tall becomes wide; what was wide becomes tall.",
        code: "a = np.array([[1, 2, 3], [4, 5, 6]])\nb = a.T\nassert b.shape == __",
        solution: "(3, 2)",
        test: "",
        hint: "Transposing swaps rows and columns. A (2, 3) array becomes (3, 2)."
    },
    {
        id: "reshaping_6",
        title: "Transpose Contents",
        description: "Rows become columns; columns become rows — yet every element finds its place.",
        code: "a = np.array([[1, 2, 3], [4, 5, 6]])\nb = a.T\nassert b.tolist() == __",
        solution: "[[1, 4], [2, 5], [3, 6]]",
        test: "",
        hint: "Each column of the original becomes a row in the transpose. Column [1, 4] becomes the first row."
    },
    {
        id: "reshaping_7",
        title: "Transpose with Axes",
        description: "Three doors, three keys — only the right order opens the way.",
        code: "a = np.zeros((2, 3, 4))\nb = a.transpose(2, 0, 1)\nassert b.shape == __",
        solution: "(4, 2, 3)",
        test: "",
        hint: "transpose(2, 0, 1) reorders dimensions: axis 2 (size 4) first, axis 0 (size 2) second, axis 1 (size 3) third."
    },
    {
        id: "reshaping_8",
        title: "Expand Dimensions",
        description: "A single thread, held aloft, becomes a banner.",
        code: "a = np.array([1, 2, 3])\nb = np.expand_dims(a, axis=0)\nassert b.shape == __",
        solution: "(1, 3)",
        test: "",
        hint: "expand_dims with axis=0 adds a new dimension at the front. Shape goes from (3,) to (1, 3)."
    },
    {
        id: "reshaping_9",
        title: "Squeeze Dimensions",
        description: "Remove the silence between the notes; the melody remains.",
        code: "a = np.array([[[1], [2], [3]]])\nassert a.shape == (1, 3, 1)\nb = np.squeeze(a)\nassert b.shape == __",
        solution: "(3,)",
        test: "",
        hint: "squeeze removes all dimensions of size 1. From (1, 3, 1), both size-1 dimensions are dropped, leaving (3,)."
    },
    {
        id: "reshaping_10",
        title: "Concatenate Arrays",
        description: "Two rivers meet and flow as one.",
        code: "a = np.array([[1, 2], [3, 4]])\nb = np.array([[5, 6]])\nc = np.concatenate([a, b], axis=0)\nassert c.tolist() == __",
        solution: "[[1, 2], [3, 4], [5, 6]]",
        test: "",
        hint: "Concatenating along axis=0 stacks rows. The (2, 2) and (1, 2) arrays combine into a (3, 2) array."
    },
    {
        id: "reshaping_11",
        title: "Stack Creates a New Dimension",
        description: "Two flat maps, stacked, become a book.",
        code: "a = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nc = np.stack([a, b])\nassert c.tolist() == __",
        solution: "[[1, 2, 3], [4, 5, 6]]",
        test: "",
        hint: "stack creates a NEW dimension. Two arrays of shape (3,) become one array of shape (2, 3)."
    }
];
