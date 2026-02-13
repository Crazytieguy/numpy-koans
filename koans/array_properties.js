window.KOANS_ARRAY_PROPERTIES = [
    {
        id: "array_properties_1",
        title: "Shape of a 1D Array",
        description: "To know an array, first ask its shape.",
        code: "a = np.array([1, 2, 3, 4, 5])\nassert a.shape == __",
        solution: "(5,)",
        test: "",
        hint: "A 1D array with 5 elements has shape (5,) — the trailing comma marks it as a tuple."
    },
    {
        id: "array_properties_2",
        title: "Shape of a 2D Array",
        description: "Rows and columns — the shape speaks in pairs.",
        code: "a = np.array([[1, 2, 3], [4, 5, 6]])\nassert a.shape == __",
        solution: "(2, 3)",
        test: "",
        hint: "Count the rows, then count the columns within each row."
    },
    {
        id: "array_properties_3",
        title: "Number of Dimensions",
        description: "A line has one truth. A plane, two. Ask how deep the array sees.",
        code: "a = np.array([[1, 2], [3, 4], [5, 6]])\nassert a.ndim == __",
        solution: "2",
        test: "",
        hint: "How many levels of nesting are there? One pair of outer brackets, then inner brackets — that's two."
    },
    {
        id: "array_properties_4",
        title: "Total Number of Elements",
        description: "Count every grain of sand in the array.",
        code: "a = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\nassert a.size == __",
        solution: "9",
        test: "",
        hint: "Count every individual number in the array, regardless of how they are arranged."
    },
    {
        id: "array_properties_5",
        title: "Data Type of Integers",
        description: "Every element carries the same nature within.",
        code: "a = np.array([1, 2, 3])\nassert a.dtype == np.dtype(__)",
        solution: "'int64'",
        test: "",
        hint: "NumPy stores Python integers as 64-bit integers by default."
    },
    {
        id: "array_properties_6",
        title: "Data Type of Floats",
        description: "A single decimal point changes the nature of all.",
        code: "a = np.array([1.0, 2.0, 3.0])\nassert a.dtype == np.dtype(__)",
        solution: "'float64'",
        test: "",
        hint: "The decimal points make these floats. NumPy uses 64-bit floats by default."
    },
    {
        id: "array_properties_7",
        title: "Item Size in Bytes",
        description: "Each element occupies a small room. How many bytes wide?",
        code: "a = np.array([1, 2, 3], dtype=np.int32)\nassert a.itemsize == __",
        solution: "4",
        test: "",
        hint: "int32 means 32 bits. There are 8 bits in a byte."
    },
    {
        id: "array_properties_8",
        title: "Total Bytes Consumed",
        description: "The weight of the whole is the weight of one times the many.",
        code: "a = np.array([10, 20, 30, 40, 50], dtype=np.float64)\nassert a.nbytes == __",
        solution: "40",
        test: "",
        hint: "5 elements, each float64 (8 bytes). Multiply to find the total."
    },
    {
        id: "array_properties_9",
        title: "Casting Changes Values",
        description: "When you cast away the fractional self, only the whole remains.",
        code: "a = np.array([1.7, 2.3, 3.9])\nb = a.astype(int)\nassert list(b) == __",
        solution: "[1, 2, 3]",
        test: "",
        hint: "astype(int) truncates toward zero — it does not round. 1.7 becomes 1, not 2."
    },
    {
        id: "array_properties_10",
        title: "Shape of a 3D Array",
        description: "Beyond the plane, a deeper world unfolds.",
        code: "a = np.array([[[1, 2], [3, 4], [5, 6]]])\nassert a.shape == __",
        solution: "(1, 3, 2)",
        test: "",
        hint: "Count the brackets from outside in: 1 block, containing 3 rows, each with 2 elements."
    }
];
