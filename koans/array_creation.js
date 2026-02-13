window.KOANS_ARRAY_CREATION = [
    {
        id: "array_creation_1",
        title: "Array from a List",
        description: "The journey begins with a simple truth",
        code: "a = np.array([10, 20, 30])\nassert a[1] == __",
        solution: "20",
        test: "",
        hint: "Index 1 is the second element of the array."
    },
    {
        id: "array_creation_2",
        title: "2D Array from Nested Lists",
        description: "Within each thing, another world may hide",
        code: "a = np.array([[1, 2, 3], [4, 5, 6]])\nassert a.shape == __",
        solution: "(2, 3)",
        test: "",
        hint: "The outer list has 2 elements, each inner list has 3. Shape is (rows, columns)."
    },
    {
        id: "array_creation_3",
        title: "Array of Zeros",
        description: "From nothing, structure emerges",
        code: "a = np.zeros(4)\nassert list(a) == __",
        solution: "[0.0, 0.0, 0.0, 0.0]",
        test: "",
        hint: "zeros(4) creates 4 elements, each 0.0 (floats by default)."
    },
    {
        id: "array_creation_4",
        title: "Array of Ones",
        description: "One is the seed from which all numbers grow",
        code: "a = np.ones((2, 3))\nassert a.shape == __",
        solution: "(2, 3)",
        test: "",
        hint: "The shape you pass in is the shape you get back."
    },
    {
        id: "array_creation_5",
        title: "Array Filled with a Value",
        description: "A vessel holds whatever you pour into it",
        code: "a = np.full(__, 7)",
        solution: "4",
        test: "assert list(a) == [7, 7, 7, 7], \"Expected [7, 7, 7, 7]\"",
        hint: "The test expects 4 sevens. What size should you pass?"
    },
    {
        id: "array_creation_6",
        title: "Empty Array",
        description: "An empty room still has a shape",
        code: "a = np.empty((3, 2))\nassert a.shape == __",
        solution: "(3, 2)",
        test: "",
        hint: "empty() allocates space without filling it, but the shape is exactly what you requested."
    },
    {
        id: "array_creation_7",
        title: "Range of Values",
        description: "Not every step must touch every stone",
        code: "a = np.arange(0, 10, 2)\nassert list(a) == __",
        solution: "[0, 2, 4, 6, 8]",
        test: "",
        hint: "Start at 0, stop before 10, step by 2. Like counting even numbers: 0, 2, 4, 6, 8."
    },
    {
        id: "array_creation_8",
        title: "Linearly Spaced Values",
        description: "Between any two points, infinite paths lie waiting",
        code: "a = np.linspace(0, 1, __)",
        solution: "5",
        test: "assert len(a) == 5, \"Expected 5 elements\"\nassert a[0] == 0.0 and a[-1] == 1.0, \"Expected range from 0.0 to 1.0\"",
        hint: "The third argument is how many points to place between start and stop, inclusive."
    },
    {
        id: "array_creation_9",
        title: "Identity Matrix",
        description: "To know yourself is the beginning of all wisdom",
        code: "a = np.eye(3)\nassert a[0, 0] == __",
        solution: "1.0",
        test: "assert a[0, 1] == 0.0, \"Off-diagonal elements should be 0.0\"",
        hint: "An identity matrix has 1s on the diagonal and 0s everywhere else. What sits at row 0, column 0?"
    },
    {
        id: "array_creation_10",
        title: "From Nothing, a Shape",
        description: "From nothing, a shape of silence",
        code: "a = np.__(3)\nassert list(a) == [0.0, 0.0, 0.0]",
        solution: "zeros",
        test: "",
        hint: "Which function creates an array filled entirely with 0.0?"
    },
    {
        id: "array_creation_11",
        title: "Array from a Tuple",
        description: "Many containers, one truth within",
        code: "a = np.array((10, 20, 30))\nassert len(a) == __",
        solution: "3",
        test: "",
        hint: "The tuple has three elements. How long is the resulting array?"
    },
    {
        id: "array_creation_12",
        title: "Specifying Data Type",
        description: "To name a thing is to give it form",
        code: "a = np.array([1.5, 2.7, 3.9], dtype=int)\nassert list(a) == __",
        solution: "[1, 2, 3]",
        test: "",
        hint: "Converting floats to int truncates toward zero: 1.5 becomes 1, 2.7 becomes 2, 3.9 becomes 3."
    }
];
