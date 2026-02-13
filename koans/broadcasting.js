window.KOANS_BROADCASTING = [
    {
        id: "broadcasting_1",
        title: "Scalar Reaches Every Element",
        description: "A single voice can reach every ear.",
        code: "a = np.array([1, 2, 3])\nassert list(a + 10) == __",
        solution: "[11, 12, 13]",
        test: "",
        hint: "A scalar is added to every element: 1+10, 2+10, 3+10."
    },
    {
        id: "broadcasting_2",
        title: "Row Vector Adds to Every Row",
        description: "The river flows the same beneath every bridge.",
        code: "matrix = np.array([[1, 2, 3],\n                   [4, 5, 6]])\nvector = np.array([10, 20, 30])\nresult = matrix + vector\nassert list(result[0]) == __",
        solution: "[11, 22, 33]",
        test: "assert list(result[1]) == [14, 25, 36], 'Row 1 should be [14, 25, 36]'",
        hint: "The vector [10, 20, 30] is added element-wise to each row. Row 0: [1+10, 2+20, 3+30]."
    },
    {
        id: "broadcasting_3",
        title: "Column Meets Row",
        description: "Where the vertical meets the horizontal, a world is born.",
        code: "col = np.array([[1],\n               [2],\n               [3]])\nrow = np.array([10, 20, 30])\nassert (col + row).shape == __",
        solution: "(3, 3)",
        test: "",
        hint: "A (3,1) column and a (3,) row broadcast to (3, 3). Each pair of elements combines."
    },
    {
        id: "broadcasting_4",
        title: "Predicting the Grid",
        description: "To see the whole, trace each thread.",
        code: "col = np.array([[1],\n               [2],\n               [3]])\nrow = np.array([10, 20, 30])\nassert list((col + row)[1]) == __",
        solution: "[12, 22, 32]",
        test: "",
        hint: "Row 1 of the grid adds col value 2 to each element of row: [2+10, 2+20, 2+30]."
    },
    {
        id: "broadcasting_5",
        title: "Shape Compatibility",
        description: "Alignment reveals hidden harmony.",
        code: "a = np.ones((3, 1, 4))\nb = np.ones((1, 5, 4))\nassert (a + b).shape == __",
        solution: "(3, 5, 4)",
        test: "",
        hint: "Shapes align right-to-left: (3,1,4) and (1,5,4). Dimensions of 1 stretch: 3, 5, 4."
    },
    {
        id: "broadcasting_6",
        title: "Centering Data",
        description: "To find where you stand, subtract the ground beneath you.",
        code: "data = np.array([[1, 2],\n                 [3, 4],\n                 [5, 6]])\nmeans = np.mean(data, axis=0)  # [3.0, 4.0]\ncentered = data - means\nassert list(centered[0]) == __",
        solution: "[-2.0, -2.0]",
        test: "assert list(centered[2]) == [2.0, 2.0], 'Last row should be [2.0, 2.0]'",
        hint: "Column means are [3.0, 4.0]. Row 0: [1-3.0, 2-4.0] = [-2.0, -2.0]."
    },
    {
        id: "broadcasting_7",
        title: "Outer Product",
        description: "Two lines crossing weave an entire fabric.",
        code: "a = np.array([1, 2, 3]).reshape(3, 1)\nb = np.array([10, 20])\nassert list((a * b)[2]) == __",
        solution: "[30, 60]",
        test: "assert list((a * b)[0]) == [10, 20], 'Row 0 should be [10, 20]'",
        hint: "The (3,1) column times the (2,) row gives a (3,2) grid. Row 2: [3*10, 3*20]."
    },
    {
        id: "broadcasting_8",
        title: "Fixing a Shape Mismatch",
        description: "The small stretches to meet the large — but only if shown how.",
        code: "matrix = np.array([[1, 2, 3],\n                   [4, 5, 6]])\nvector = np.array([10, 20])\n# matrix + vector would fail: (2,3) and (2,) don't align\nfixed = matrix + vector.reshape(__)",
        solution: "(2, 1)",
        test: "assert np.array_equal(fixed, [[11, 12, 13], [24, 25, 26]]), 'Should be [[11, 12, 13], [24, 25, 26]]'",
        hint: "Reshape to (2,1) so [10, 20] becomes a column that broadcasts across 3 columns."
    },
    {
        id: "broadcasting_9",
        title: "The Multiplication Table",
        description: "From two small truths, a larger truth emerges.",
        code: "rows = np.array([1, 2, 3, 4]).reshape(4, 1)\ncols = np.array([1, 2, 3, 4])\ntable = rows * cols\nassert table[2, 3] == __",
        solution: "12",
        test: "assert table[0, 0] == 1, '1 x 1 = 1'\nassert table[3, 3] == 16, '4 x 4 = 16'",
        hint: "table[2, 3] is rows[2] * cols[3] = 3 * 4 = 12."
    }
];
