window.KOANS_MATH_OPERATIONS = [
    {
        id: "math_operations_1",
        title: "Element-wise Addition",
        description: "When two forces combine, each element finds its partner.",
        code: "a = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nassert list(a + b) == __",
        solution: "[5, 7, 9]",
        test: "",
        hint: "Add each pair of elements: 1+4, 2+5, 3+6."
    },
    {
        id: "math_operations_2",
        title: "Element-wise Multiplication",
        description: "Side by side, each pair weaves its own small product.",
        code: "a = np.array([2, 3, 4])\nb = np.array([5, 6, 7])\nassert list(a * b) == __",
        solution: "[10, 18, 28]",
        test: "",
        hint: "Multiply each pair: 2*5, 3*6, 4*7."
    },
    {
        id: "math_operations_3",
        title: "Scalar Multiplication",
        description: "One voice speaks, and every element listens.",
        code: "a = np.array([1, 2, 3, 4])\nassert list(a * 10) == __",
        solution: "[10, 20, 30, 40]",
        test: "",
        hint: "Each element is multiplied by 10."
    },
    {
        id: "math_operations_4",
        title: "Element-wise Division",
        description: "To divide is to ask: how many times does one fit inside the other?",
        code: "a = np.array([10, 20, 30])\nb = np.array([2, 4, 5])\nassert list(a / b) == __",
        solution: "[5.0, 5.0, 6.0]",
        test: "",
        hint: "Divide each pair: 10/2, 20/4, 30/5. Division always produces floats."
    },
    {
        id: "math_operations_5",
        title: "Power",
        description: "To raise a number is to let it multiply into itself, again and again.",
        code: "a = np.array([2, 3, 4])\nassert list(np.power(a, 3)) == __",
        solution: "[8, 27, 64]",
        test: "",
        hint: "Cube each element: 2**3=8, 3**3=27, 4**3=64."
    },
    {
        id: "math_operations_6",
        title: "Square Root",
        description: "Every perfect square remembers the smaller self it grew from.",
        code: "a = np.array([1, 4, 9, 16, 25])\nassert list(np.sqrt(a)) == __",
        solution: "[1.0, 2.0, 3.0, 4.0, 5.0]",
        test: "",
        hint: "The square root of each perfect square: sqrt(1)=1, sqrt(4)=2, sqrt(9)=3, sqrt(16)=4, sqrt(25)=5."
    },
    {
        id: "math_operations_7",
        title: "Absolute Value",
        description: "Stripped of sign, every distance is walked forward.",
        code: "a = np.array([-5, -2, 0, 3, -8])\nassert list(np.abs(a)) == __",
        solution: "[5, 2, 0, 3, 8]",
        test: "",
        hint: "Drop the negative signs: |-5|=5, |-2|=2, |0|=0, |3|=3, |-8|=8."
    },
    {
        id: "math_operations_8",
        title: "Exponential",
        description: "Even at zero, growth yields one.",
        code: "a = np.array([0, 0, 0])\nassert list(np.exp(a)) == __",
        solution: "[1.0, 1.0, 1.0]",
        test: "",
        hint: "e raised to the power of 0 is always 1."
    },
    {
        id: "math_operations_9",
        title: "Logarithm",
        description: "The logarithm unwinds what the exponent has wound.",
        code: "a = np.array([1, np.e, np.e**2])\nassert list(np.round(np.log(a))) == __",
        solution: "[0.0, 1.0, 2.0]",
        test: "",
        hint: "ln(1)=0, ln(e)=1, ln(e**2)=2. The natural log undoes the exponential."
    },
    {
        id: "math_operations_10",
        title: "Dot Product",
        description: "Two voices distilled into a single number.",
        code: "a = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nassert np.dot(a, b) == __",
        solution: "32",
        test: "",
        hint: "Multiply matching elements and sum: 1*4 + 2*5 + 3*6 = 4 + 10 + 18 = 32."
    },
    {
        id: "math_operations_11",
        title: "Matrix Multiplication",
        description: "The identity transforms nothing it touches.",
        code: "a = np.array([[1, 0], [0, 1]])\nb = np.array([[5, 6], [7, 8]])\nassert (a @ b).tolist() == __",
        solution: "[[5, 6], [7, 8]]",
        test: "",
        hint: "The identity matrix times any matrix returns that matrix unchanged. @ is the matrix multiplication operator."
    }
];
