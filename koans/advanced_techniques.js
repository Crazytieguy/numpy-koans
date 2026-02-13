window.KOANS_ADVANCED_TECHNIQUES = [
    {
        id: "advanced_techniques_1",
        title: "The View is the Original",
        description: "A view remains tethered to what it sees; change the reflection and the source ripples.",
        code: "original = np.array([10, 20, 30, 40, 50])\nview = original[1:4]\nview[0] = 99\nresult = original[1]",
        solution: "99",
        test: "assert result == __, \"A slice is a view — mutating the view mutates the original\"",
        hint: "A slice of a NumPy array is a view, not a copy. Changing view[0] changes original[1]."
    },
    {
        id: "advanced_techniques_2",
        title: "A Copy Walks Alone",
        description: "Cut the thread and the puppet moves on its own.",
        code: "original = np.array([10, 20, 30, 40])\nindependent = original[1:3].copy()\nindependent[0] = 999\nresult = original[1]",
        solution: "20",
        test: "assert result == __, \"A copy is independent — the original is untouched\"",
        hint: ".copy() severs the link. The original keeps its value."
    },
    {
        id: "advanced_techniques_3",
        title: "Detecting a View",
        description: "Ask the mirror if it has a source, and it will confess.",
        code: "original = np.array([1, 2, 3, 4, 5])\nview = original[::2]\nshares_memory = np.shares_memory(original, view)\nresult = __",
        solution: "True",
        test: "assert result == shares_memory, \"A slice shares memory with its source\"",
        hint: "np.shares_memory returns True when two arrays overlap in memory."
    },
    {
        id: "advanced_techniques_4",
        title: "Memory Layout: Row-Major",
        description: "Rows and columns are merely two ways of reading the same garden.",
        code: "arr_c = np.array([[1, 2], [3, 4]], order='C')\narr_f = np.array([[1, 2], [3, 4]], order='F')\nc_flag = arr_c.flags['C_CONTIGUOUS']\nf_flag = arr_f.flags['C_CONTIGUOUS']\nresult = __",
        solution: "False",
        test: "assert result == f_flag, \"A Fortran-order array is not C-contiguous\"",
        hint: "order='F' stores column-by-column, so C_CONTIGUOUS is False."
    },
    {
        id: "advanced_techniques_5",
        title: "Vectorize: Scalar Logic Made Universal",
        description: "A single hand cannot clap, but a vectorized function touches every element at once.",
        code: "def clamp(x):\n    if x < 0:\n        return 0\n    elif x > 10:\n        return 10\n    return x\nvfunc = np.vectorize(clamp)\nresult = vfunc(np.array([-5, 3, 15]))",
        solution: "np.array([0, 3, 10])",
        test: "assert np.array_equal(result, __), \"vectorize applies scalar if/else logic element-wise\"",
        hint: "The clamp function caps values: negatives become 0, values above 10 become 10, and others pass through."
    },
    {
        id: "advanced_techniques_6",
        title: "Apply Along Axis",
        description: "The river does not choose which bank to carve; it flows along the axis it is given.",
        code: "arr = np.array([[10, 20, 30], [40, 50, 60]])\n\ndef spread(row):\n    return row.max() - row.min()\n\nresult = np.apply_along_axis(spread, 1, arr)",
        solution: "np.array([20, 20])",
        test: "assert np.array_equal(result, __), \"apply_along_axis applies spread() to each row\"",
        hint: "axis=1 means each row is passed to spread(). For [10, 20, 30]: max - min = 30 - 10 = 20."
    },
    {
        id: "advanced_techniques_7",
        title: "Einstein Summation: Total",
        description: "Einstein saw that indices could dance, and from their dance, a sum emerges.",
        code: "arr = np.array([2, 5, 3])\ntotal = np.einsum('i->', arr)\nresult = __",
        solution: "10",
        test: "assert result == total, \"'i->' sums all elements: no output index means full contraction\"",
        hint: "The subscript 'i->' means: take dimension i, produce a scalar. That is a sum."
    },
    {
        id: "advanced_techniques_8",
        title: "Einstein Summation: Diagonal",
        description: "The diagonal is the spine of the matrix; repeat an index, and you walk its ridge.",
        code: "matrix = np.array([[5, 1, 1],\n                   [1, 3, 1],\n                   [1, 1, 7]])\ntrace = np.einsum('ii->', matrix)\nresult = __",
        solution: "15",
        test: "assert result == trace, \"'ii->' sums the diagonal: 5 + 3 + 7 = 15\"",
        hint: "Repeated index 'ii' selects diagonal elements (5, 3, 7), then '->' sums them."
    },
    {
        id: "advanced_techniques_9",
        title: "Einstein Summation: Matrix Multiply",
        description: "Two matrices meet where their indices agree, and from that meeting, a product is born.",
        code: "a = np.array([[1, 0], [0, 1]])\nb = np.array([[5, 6], [7, 8]])\nresult = np.einsum('ij,jk->ik', a, b)",
        solution: "np.array([[5, 6], [7, 8]])",
        test: "assert np.array_equal(result, __), \"Multiplying by the identity matrix returns the original\"",
        hint: "'ij,jk->ik' is matrix multiplication. The identity matrix times anything returns that thing."
    },
    {
        id: "advanced_techniques_10",
        title: "Structured Arrays",
        description: "To name each field is to give the array a memory of what it holds.",
        code: "dt = np.dtype([('name', 'U10'), ('score', 'f8')])\nrecords = np.array([('Alice', 92.5), ('Bob', 87.0)], dtype=dt)\nbest = records[np.argmax(records['score'])]['name']\nresult = __",
        solution: "'Alice'",
        test: "assert result == best, \"argmax finds the highest score; that record's name is the answer\"",
        hint: "Alice has 92.5 and Bob has 87.0. argmax picks the index of the maximum."
    }
];
