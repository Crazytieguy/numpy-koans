window.KOANS_LINEAR_ALGEBRA = [
    {
        id: "linear_algebra_1",
        title: "The Determinant of Identity",
        description: "The identity matrix transforms nothing — its measure of change is the simplest truth.",
        code: "A = np.eye(2)\nassert np.linalg.det(A) == __",
        solution: "1.0",
        test: "",
        hint: "The identity matrix scales space by a factor of 1. Its determinant is 1.0."
    },
    {
        id: "linear_algebra_2",
        title: "Determinant by Hand",
        description: "The determinant measures the space a matrix creates — or destroys.",
        code: "# For a 2x2 matrix [[a, b], [c, d]], det = a*d - b*c\nA = np.array([[3, 1], [2, 4]])\nassert np.linalg.det(A) == __",
        solution: "10.0",
        test: "",
        hint: "For [[3, 1], [2, 4]]: det = 3*4 - 1*2 = 12 - 2 = 10."
    },
    {
        id: "linear_algebra_3",
        title: "Inverse Undoes",
        description: "Every transformation has its mirror — multiply and arrive where you began.",
        code: "A = np.array([[1, 2], [3, 4]])\nA_inv = np.linalg.inv(A)\nresult = A @ A_inv\n# A matrix times its inverse equals the identity\nassert np.allclose(result, np.eye(__))",
        solution: "2",
        test: "",
        hint: "A times its inverse gives the identity matrix. np.eye(n) creates an n x n identity. A is 2x2."
    },
    {
        id: "linear_algebra_4",
        title: "Inverse of a Diagonal",
        description: "When each dimension scales independently, the path back inverts each step.",
        code: "A = np.array([[2, 0], [0, 5]])\nA_inv = np.linalg.inv(A)\nassert A_inv[0, 0] == __",
        solution: "0.5",
        test: "assert A_inv[1, 1] == 0.2, 'The inverse of 5 is 0.2'",
        hint: "For a diagonal matrix, each diagonal entry d becomes 1/d. The inverse of 2 is 0.5."
    },
    {
        id: "linear_algebra_5",
        title: "Eigenvalues of a Diagonal",
        description: "On a diagonal matrix, the eigenvalues stand in plain sight.",
        code: "A = np.array([[7, 0], [0, 3]])\neigenvalues, _ = np.linalg.eig(A)\nassert max(eigenvalues) == __",
        solution: "7.0",
        test: "assert min(eigenvalues) == 3.0, 'The smaller eigenvalue should be 3.0'",
        hint: "A diagonal matrix's eigenvalues are its diagonal entries: 7 and 3. The max is 7."
    },
    {
        id: "linear_algebra_6",
        title: "Solving a System",
        description: "When many truths constrain the world at once, one path satisfies them all.",
        code: "# Solve: 1*x + 0*y = 5\n#        0*x + 1*y = 3\nA = np.eye(2)\nb = np.array([5, 3])\nx = np.linalg.solve(A, b)\nassert x[0] == __",
        solution: "5.0",
        test: "assert x[1] == 3.0, 'The second unknown should be 3.0'",
        hint: "The identity times x equals b, so x = b. x[0] = 5."
    },
    {
        id: "linear_algebra_7",
        title: "Vector Norm",
        description: "To know a vector's strength, measure how far it reaches from stillness.",
        code: "v = np.array([3, 4])\nassert np.linalg.norm(v) == __",
        solution: "5.0",
        test: "",
        hint: "The norm is sqrt(3**2 + 4**2) = sqrt(9 + 16) = sqrt(25) = 5. The 3-4-5 triangle."
    },
    {
        id: "linear_algebra_8",
        title: "Rank and Independence",
        description: "Not all rows speak with independent voices — some merely echo.",
        code: "# Row 2 is exactly 2 * Row 1\nA = np.array([[1, 2], [2, 4]])\nassert np.linalg.matrix_rank(A) == __",
        solution: "1",
        test: "",
        hint: "Row [2, 4] is just 2 times [1, 2]. Only one independent row, so rank = 1."
    },
    {
        id: "linear_algebra_9",
        title: "Trace of a Matrix",
        description: "Walk the diagonal path and sum what you find.",
        code: "A = np.array([[4, 9], [2, 6]])\nassert np.trace(A) == __",
        solution: "10",
        test: "",
        hint: "The trace is the sum of diagonal elements: 4 + 6 = 10."
    },
    {
        id: "linear_algebra_10",
        title: "Cross Product",
        description: "Two directions define a plane; the cross product stands apart from both.",
        code: "# x-axis cross y-axis = z-axis\na = np.array([1, 0, 0])\nb = np.array([0, 1, 0])\nassert list(np.cross(a, b)) == __",
        solution: "[0, 0, 1]",
        test: "",
        hint: "The cross product of the x-axis [1,0,0] and y-axis [0,1,0] points along the z-axis: [0, 0, 1]."
    }
];
