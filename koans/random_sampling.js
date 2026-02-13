window.KOANS_RANDOM_SAMPLING = [
    {
        id: "random_sampling_1",
        title: "Reproducible Randomness",
        description: "Even chaos can be tamed — when two minds share a seed.",
        code: "rng1 = np.random.default_rng(42)\nrng2 = np.random.default_rng(42)\nassert np.array_equal(rng1.random(5), rng2.random(5)) == __",
        solution: "True",
        test: "",
        hint: "Two generators with the same seed produce identical sequences. Always."
    },
    {
        id: "random_sampling_2",
        title: "Different Seeds, Different Worlds",
        description: "Change the seed and the entire universe shifts.",
        code: "rng1 = np.random.default_rng(42)\nrng2 = np.random.default_rng(99)\nassert np.array_equal(rng1.random(5), rng2.random(5)) == __",
        solution: "False",
        test: "",
        hint: "Different seeds produce different sequences."
    },
    {
        id: "random_sampling_3",
        title: "Random Floats Live in [0, 1)",
        description: "Between zero and one lies an infinity of possibility.",
        code: "rng = np.random.default_rng(42)\nsamples = rng.random(10000)\nassert np.all(samples >= 0) and np.all(samples < __)",
        solution: "1",
        test: "",
        hint: "random() produces values in the half-open interval [0, 1) — always >= 0 and strictly < 1."
    },
    {
        id: "random_sampling_4",
        title: "Specifying Shape",
        description: "Randomness can fill any mold you provide.",
        code: "rng = np.random.default_rng(42)\nsamples = rng.random((3, 4))\nassert samples.shape == __",
        solution: "(3, 4)",
        test: "",
        hint: "Pass a tuple to random() and the output shape matches exactly."
    },
    {
        id: "random_sampling_5",
        title: "Random Integers",
        description: "Integers emerge whole, never fractured.",
        code: "rng = np.random.default_rng(42)\n# integers(low, high) — high is exclusive\ndice = rng.integers(1, 7, size=10000)\nassert np.max(dice) == __",
        solution: "6",
        test: "assert np.min(dice) == 1, 'The minimum die value should be 1'",
        hint: "integers(1, 7) generates values from 1 to 6. The high value (7) is exclusive."
    },
    {
        id: "random_sampling_6",
        title: "Uniform Distribution",
        description: "Constrained freedom — randomness within chosen walls.",
        code: "rng = np.random.default_rng(42)\nsamples = rng.uniform(5.0, 10.0, size=1000)\nassert np.all((samples >= 5.0) & (samples < 10.0)) == __",
        solution: "True",
        test: "",
        hint: "uniform(low, high) always produces values in [low, high). Every single one."
    },
    {
        id: "random_sampling_7",
        title: "Choosing from an Array",
        description: "To choose without replacement is to never look back.",
        code: "rng = np.random.default_rng(42)\narr = np.array([10, 20, 30, 40, 50])\npicked = rng.choice(arr, size=3, replace=False)\nassert len(set(picked)) == __",
        solution: "3",
        test: "assert np.all(np.isin(picked, arr)), 'All picks must come from the original array'",
        hint: "Without replacement, each pick is unique. 3 picks = 3 distinct values."
    },
    {
        id: "random_sampling_8",
        title: "Shuffled but Whole",
        description: "The same stones, rearranged, form a new garden.",
        code: "rng = np.random.default_rng(42)\narr = np.array([1, 2, 3, 4, 5])\nrng.shuffle(arr)\nassert sorted(arr) == __",
        solution: "[1, 2, 3, 4, 5]",
        test: "",
        hint: "Shuffle rearranges elements in place. No elements are added or removed — sorting recovers the original."
    },
    {
        id: "random_sampling_9",
        title: "Permutation Preserves the Original",
        description: "Shuffle rearranges in place; permutation creates anew.",
        code: "rng = np.random.default_rng(42)\narr = np.array([10, 20, 30, 40, 50])\nshuffled = rng.permutation(arr)\nassert list(arr) == __",
        solution: "[10, 20, 30, 40, 50]",
        test: "assert set(shuffled) == set(arr), 'Permutation has the same elements'",
        hint: "Unlike shuffle (in-place), permutation returns a new array. The original is unchanged."
    }
];
