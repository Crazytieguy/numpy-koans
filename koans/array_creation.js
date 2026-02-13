window.KOANS_ARRAY_CREATION = [
    {
        id: "array_creation_1",
        title: "Array from a List",
        description: "The journey begins by turning a list into something more.",
        code: "a = np.array([10, 20, 30])\nassert list(a) == __",
        solution: "[10, 20, 30]",
        test: "",
        hint: "np.array() converts a Python list into a NumPy array with the same elements."
    },
    {
        id: "array_creation_2",
        title: "2D Array from Nested Lists",
        description: "Within each list, another world may hide.",
        code: "a = np.array([[1, 2], [3, 4]])\nassert a.tolist() == __",
        solution: "[[1, 2], [3, 4]]",
        test: "",
        hint: "Nested lists become rows of a 2D array. The structure is preserved."
    },
    {
        id: "array_creation_3",
        title: "Array of Zeros",
        description: "From nothing, structure emerges.",
        code: "a = np.zeros(4)\nassert list(a) == __",
        solution: "[0.0, 0.0, 0.0, 0.0]",
        test: "",
        hint: "zeros(4) creates 4 elements, each 0.0 (floats by default)."
    },
    {
        id: "array_creation_4",
        title: "Array of Ones",
        description: "One is the seed from which all numbers grow.",
        code: "a = np.ones(3)\nassert list(a) == __",
        solution: "[1.0, 1.0, 1.0]",
        test: "",
        hint: "ones(3) creates 3 elements, each 1.0 (floats by default)."
    },
    {
        id: "array_creation_5",
        title: "Filled with a Value",
        description: "A vessel holds whatever you pour into it.",
        code: "a = np.full(4, 7)\nassert list(a) == __",
        solution: "[7, 7, 7, 7]",
        test: "",
        hint: "full(size, value) creates an array where every element equals the fill value."
    },
    {
        id: "array_creation_6",
        title: "Simple Range",
        description: "Sometimes a single number is all you need.",
        code: "a = np.arange(5)\nassert list(a) == __",
        solution: "[0, 1, 2, 3, 4]",
        test: "",
        hint: "With one argument, arange starts at 0 and counts up to (but not including) the given value."
    },
    {
        id: "array_creation_7",
        title: "Range with a Step",
        description: "Not every path touches every stone.",
        code: "a = np.arange(0, 10, 2)\nassert list(a) == __",
        solution: "[0, 2, 4, 6, 8]",
        test: "",
        hint: "Start at 0, stop before 10, step by 2: 0, 2, 4, 6, 8."
    },
    {
        id: "array_creation_8",
        title: "Linearly Spaced Values",
        description: "Between any two points, place as many stones as you wish.",
        code: "a = np.linspace(0, 1, 5)\nassert list(a) == __",
        solution: "[0.0, 0.25, 0.5, 0.75, 1.0]",
        test: "",
        hint: "5 points evenly spaced from 0 to 1, inclusive on both ends."
    },
    {
        id: "array_creation_9",
        title: "Identity Matrix",
        description: "To know yourself is the beginning of all wisdom.",
        code: "a = np.eye(2)\nassert a.tolist() == __",
        solution: "[[1.0, 0.0], [0.0, 1.0]]",
        test: "",
        hint: "The identity matrix has 1s on the diagonal and 0s everywhere else."
    },
    {
        id: "array_creation_10",
        title: "Specifying Data Type",
        description: "To name a thing is to give it form.",
        code: "a = np.array([1.5, 2.7, 3.9], dtype=int)\nassert list(a) == __",
        solution: "[1, 2, 3]",
        test: "",
        hint: "Converting floats to int truncates toward zero: 1.5 becomes 1, 2.7 becomes 2, 3.9 becomes 3."
    },
    {
        id: "array_creation_11",
        title: "2D Zeros",
        description: "Emptiness can take any shape you give it.",
        code: "a = np.zeros((2, 3))\nassert a.tolist() == __",
        solution: "[[0.0, 0.0, 0.0], [0.0, 0.0, 0.0]]",
        test: "",
        hint: "Pass a tuple to zeros() to create a multi-dimensional array of zeros."
    },
    {
        id: "array_creation_12",
        title: "Choosing the Stop",
        description: "To reach a destination, know where to stop.",
        code: "a = np.arange(1, __, 2)",
        solution: "10",
        test: "assert list(a) == [1, 3, 5, 7, 9], 'Expected [1, 3, 5, 7, 9]'",
        hint: "arange stops before the end value. What stop value produces [1, 3, 5, 7, 9]?"
    }
];
