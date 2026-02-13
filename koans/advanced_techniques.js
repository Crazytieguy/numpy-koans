window.KOANS_ADVANCED_TECHNIQUES = [
    {
        id: "advanced_techniques_1",
        title: "Slices are Views",
        description: "A view remains tethered to its source; change the reflection and the original ripples.",
        code: "original = np.array([10, 20, 30, 40, 50])\nview = original[1:4]\nview[0] = 99\nassert original[1] == __",
        solution: "99",
        test: "",
        hint: "A slice of a NumPy array is a view, not a copy. Changing view[0] changes original[1]."
    },
    {
        id: "advanced_techniques_2",
        title: "Copies are Independent",
        description: "Cut the thread and the puppet moves on its own.",
        code: "original = np.array([10, 20, 30, 40])\nindependent = original[1:3].copy()\nindependent[0] = 999\nassert original[1] == __",
        solution: "20",
        test: "",
        hint: ".copy() severs the link. The original keeps its value of 20."
    },
    {
        id: "advanced_techniques_3",
        title: "Detecting Shared Memory",
        description: "Ask the mirror if it has a source, and it will confess.",
        code: "original = np.array([1, 2, 3, 4, 5])\nview = original[::2]\nassert np.shares_memory(original, view) == __",
        solution: "True",
        test: "",
        hint: "np.shares_memory returns True when two arrays overlap in memory. A slice shares memory."
    },
    {
        id: "advanced_techniques_4",
        title: "Memory Layout",
        description: "Rows and columns are merely two ways of reading the same garden.",
        code: "arr = np.array([[1, 2], [3, 4]], order='F')\nassert arr.flags['C_CONTIGUOUS'] == __",
        solution: "False",
        test: "",
        hint: "order='F' stores data column-by-column (Fortran style), so it is not C-contiguous (row-by-row)."
    },
    {
        id: "advanced_techniques_5",
        title: "Vectorize",
        description: "A single hand cannot clap, but a vectorized function touches every element at once.",
        code: "def clamp(x):\n    if x < 0: return 0\n    elif x > 10: return 10\n    return x\nvfunc = np.vectorize(clamp)\nassert list(vfunc(np.array([-5, 3, 15]))) == __",
        solution: "[0, 3, 10]",
        test: "",
        hint: "vectorize applies a scalar function element-wise. Negatives become 0, values above 10 become 10."
    },
    {
        id: "advanced_techniques_6",
        title: "Apply Along an Axis",
        description: "The river flows along the axis it is given.",
        code: "arr = np.array([[10, 20, 30], [40, 50, 60]])\ndef spread(row):\n    return row.max() - row.min()\nassert list(np.apply_along_axis(spread, 1, arr)) == __",
        solution: "[20, 20]",
        test: "",
        hint: "axis=1 passes each row to spread(). For [10, 20, 30]: max - min = 30 - 10 = 20."
    },
    {
        id: "advanced_techniques_7",
        title: "Einstein Summation: Total",
        description: "Einstein saw that indices could dance, and from their dance, a sum emerges.",
        code: "arr = np.array([2, 5, 3])\nassert np.einsum('i->', arr) == __",
        solution: "10",
        test: "",
        hint: "'i->' means: take dimension i, produce a scalar. That's a sum: 2 + 5 + 3 = 10."
    },
    {
        id: "advanced_techniques_8",
        title: "Einstein Summation: Trace",
        description: "Repeat an index and you walk the diagonal ridge.",
        code: "matrix = np.array([[5, 1, 1],\n                   [1, 3, 1],\n                   [1, 1, 7]])\nassert np.einsum('ii->', matrix) == __",
        solution: "15",
        test: "",
        hint: "Repeated index 'ii' selects diagonal elements (5, 3, 7), then '->' sums them: 5 + 3 + 7 = 15."
    },
    {
        id: "advanced_techniques_9",
        title: "Einstein Summation: Matrix Multiply",
        description: "Two matrices meet where their indices agree.",
        code: "a = np.array([[1, 0], [0, 1]])\nb = np.array([[5, 6], [7, 8]])\nassert np.einsum('ij,jk->ik', a, b).tolist() == __",
        solution: "[[5, 6], [7, 8]]",
        test: "",
        hint: "'ij,jk->ik' is matrix multiplication. The identity matrix times anything returns that thing."
    },
    {
        id: "advanced_techniques_10",
        title: "Structured Arrays",
        description: "To name each field is to give the array a memory of what it holds.",
        code: "dt = np.dtype([('name', 'U10'), ('score', 'f8')])\nrecords = np.array([('Alice', 92.5), ('Bob', 87.0)], dtype=dt)\nassert records[np.argmax(records['score'])]['name'] == __",
        solution: "'Alice'",
        test: "",
        hint: "Alice has 92.5, Bob has 87.0. argmax finds the highest score — that record's name is Alice."
    }
];
