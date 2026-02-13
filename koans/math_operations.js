window.KOANS_MATH_OPERATIONS = [
    {
        id: "math_operations_1",
        title: "Element-wise Addition",
        description: "When two forces combine, each element finds its partner.",
        code: "a = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nc = a + b\nassert list(c) == __, \"Not quite\"",
        solution: "[5, 7, 9]",
        test: "",
        hint: "Add each pair of elements: 1+4, 2+5, 3+6."
    },
    {
        id: "math_operations_2",
        title: "Element-wise Multiplication",
        description: "Side by side, each pair weaves its own small product.",
        code: "a = np.array([2, 3, 4])\nb = np.array([5, 6, 7])\nc = a * b\nassert list(c) == __, \"Not quite\"",
        solution: "[10, 18, 28]",
        test: "",
        hint: "Multiply each pair: 2*5, 3*6, 4*7."
    },
    {
        id: "math_operations_3",
        title: "Scalar Multiplication",
        description: "One voice speaks, and every element listens tenfold.",
        code: "a = np.array([1, 2, 3, 4])\nc = a * 10\nassert list(c) == __, \"Not quite\"",
        solution: "[10, 20, 30, 40]",
        test: "",
        hint: "Each element is multiplied by 10."
    },
    {
        id: "math_operations_4",
        title: "Dot Product",
        description: "The dot product distills two voices into a single number.",
        code: "a = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nc = np.dot(a, b)\nassert c == __, \"Not quite\"",
        solution: "32",
        test: "",
        hint: "Multiply matching elements and sum: 1*4 + 2*5 + 3*6."
    },
    {
        id: "math_operations_5",
        title: "Matrix Multiplication",
        description: "Rows and columns bow to one another, exchanging their inner sums.",
        code: "a = np.array([[1, 2], [3, 4]])\nb = np.array([[5, 6], [7, 8]])\nc = np.matmul(a, b)\nassert c.tolist() == __, \"Not quite\"",
        solution: "[[19, 22], [43, 50]]",
        test: "",
        hint: "Row 0: [1*5+2*7, 1*6+2*8] = [19, 22]. Row 1: [3*5+4*7, 3*6+4*8] = [43, 50]."
    },
    {
        id: "math_operations_6",
        title: "The @ Operator",
        description: "A single glyph can hold the weight of an entire multiplication.",
        code: "a = np.array([[1, 0], [0, 1]])\nb = np.array([[5, 6], [7, 8]])\nc = a @ b\nassert c.tolist() == __, \"Not quite\"",
        solution: "[[5, 6], [7, 8]]",
        test: "",
        hint: "The identity matrix times any matrix returns that matrix unchanged."
    },
    {
        id: "math_operations_7",
        title: "Square Root",
        description: "Every perfect square remembers the smaller self it grew from.",
        code: "a = np.array([1, 4, 9, 16, 25])\nc = np.sqrt(a)\nassert list(c) == __, \"Not quite\"",
        solution: "[1.0, 2.0, 3.0, 4.0, 5.0]",
        test: "",
        hint: "The square root of each perfect square: 1, 4, 9, 16, 25."
    },
    {
        id: "math_operations_8",
        title: "Exponential at Zero",
        description: "Growth compounds upon itself — but even zero yields one.",
        code: "a = np.array([0, 0, 0])\nc = np.exp(a)\nassert list(c) == __, \"Not quite\"",
        solution: "[1.0, 1.0, 1.0]",
        test: "",
        hint: "e raised to the power of 0 is always 1."
    },
    {
        id: "math_operations_9",
        title: "Logarithm Unwinds the Exponent",
        description: "The logarithm unwinds what the exponent has wound.",
        code: "a = np.array([1, np.e, np.e**2])\nc = np.log(a)\nassert list(np.round(c)) == __, \"Not quite\"",
        solution: "[0.0, 1.0, 2.0]",
        test: "",
        hint: "ln(1) = 0, ln(e) = 1, ln(e^2) = 2."
    },
    {
        id: "math_operations_10",
        title: "Absolute Value",
        description: "Stripped of sign, all distances are walked forward.",
        code: "a = np.array([-5, -2, 0, 3, -8])\nc = np.abs(a)\nassert list(c) == __, \"Not quite\"",
        solution: "[5, 2, 0, 3, 8]",
        test: "",
        hint: "Drop the negative signs: |-5|=5, |-2|=2, |0|=0, |3|=3, |-8|=8."
    },
    {
        id: "math_operations_11",
        title: "Power Function",
        description: "To raise a number is to let it multiply into itself, again and again.",
        code: "a = np.array([2, 3, 4])\nc = np.power(a, 3)\nassert list(c) == __, \"Not quite\"",
        solution: "[8, 27, 64]",
        test: "",
        hint: "Cube each element: 2^3=8, 3^3=27, 4^3=64."
    },
    {
        id: "math_operations_12",
        title: "Finding the Missing Operand",
        description: "To divide is to ask: how many times does one fit inside the other?",
        code: "a = np.array([10, 20, 30])\nb = np.array([__, __, __])\nc = a / b",
        solution: "2, 4, 5",
        test: "assert list(c) == [5.0, 5.0, 6.0], \"Expected [5.0, 5.0, 6.0]\"",
        hint: "What must you divide 10, 20, and 30 by to get 5.0, 5.0, and 6.0?"
    }
];
