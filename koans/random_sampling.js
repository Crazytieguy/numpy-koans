window.KOANS_RANDOM_SAMPLING = [
    {
        id: "random_sampling_1",
        title: "The Seeded Generator",
        description: "From chaos, the generator brings order.",
        code: "rng = np.random.default_rng(42)\nresult = rng.random()\nassert type(result).__name__ == __",
        solution: "'float'",
        test: "",
        hint: "Calling `rng.random()` with no size argument returns a single Python float, not an array."
    },
    {
        id: "random_sampling_2",
        title: "Shape of Randomness",
        description: "A single call can fill a landscape of dimensions.",
        code: "rng = np.random.default_rng(42)\nsamples = rng.random((3, 4))\nassert samples.shape == __",
        solution: "(3, 4)",
        test: "",
        hint: "Pass a tuple like (3, 4) to `random()` and the output shape matches exactly."
    },
    {
        id: "random_sampling_3",
        title: "The Dtype of Chance",
        description: "Between zero and one lies an infinity of floating truths.",
        code: "rng = np.random.default_rng(42)\nsamples = rng.random(5)\nassert samples.dtype == np.dtype(__)",
        solution: "'float64'",
        test: "",
        hint: "By default, `rng.random()` generates 64-bit floats."
    },
    {
        id: "random_sampling_4",
        title: "Bounded Floats",
        description: "Constrained freedom -- randomness within chosen walls.",
        code: "rng = np.random.default_rng(42)\nsamples = rng.uniform(5.0, 10.0, size=1000)\nall_in_range = np.all((samples >= 5.0) & (samples < 10.0))\nassert all_in_range == __",
        solution: "True",
        test: "",
        hint: "`uniform(low, high)` always produces values in `[low, high)`. Every single one."
    },
    {
        id: "random_sampling_5",
        title: "Whole Numbers from the Void",
        description: "Integers emerge whole, never fractured.",
        code: "rng = np.random.default_rng(42)\ndice = rng.integers(1, 7, size=10)\nassert dice.shape == __",
        solution: "(10,)",
        test: "assert np.all((dice >= 1) & (dice <= 6)), \"Integers from [1, 7) should be between 1 and 6\"",
        hint: "`integers(1, 7, size=10)` generates 10 values. The shape reflects the size you requested."
    },
    {
        id: "random_sampling_6",
        title: "The Bell Curve's Domain",
        description: "The normal distribution has no walls -- it stretches to infinity.",
        code: "rng = np.random.default_rng(42)\nsamples = rng.normal(0, 1, size=(2, 5))\nassert samples.shape == __",
        solution: "(2, 5)",
        test: "",
        hint: "The `size` argument determines the output shape, just like `random()`."
    },
    {
        id: "random_sampling_7",
        title: "Choosing from the Path",
        description: "To choose is to let go of every other possibility.",
        code: "rng = np.random.default_rng(42)\narr = np.array([10, 20, 30, 40, 50])\npicked = rng.choice(arr, size=3, replace=False)\nall_from_arr = np.all(np.isin(picked, arr))\nassert all_from_arr == __",
        solution: "True",
        test: "assert len(picked) == 3 and len(set(picked)) == 3, \"Without replacement, all 3 picks must be distinct elements from the array\"",
        hint: "`choice(arr, replace=False)` picks from `arr` without repeats. Every pick must be in the original."
    },
    {
        id: "random_sampling_8",
        title: "Shuffled but Whole",
        description: "The same stones, rearranged, form a new garden.",
        code: "rng = np.random.default_rng(42)\narr = np.array([1, 2, 3, 4, 5])\nrng.shuffle(arr)\nassert sorted(arr) == __",
        solution: "[1, 2, 3, 4, 5]",
        test: "",
        hint: "Shuffle rearranges elements in-place. Sorting returns them to their original order."
    },
    {
        id: "random_sampling_9",
        title: "The Same Seed, the Same Dream",
        description: "Even randomness can be tamed -- when two minds share a seed.",
        code: "rng1 = np.random.default_rng(42)\nrng2 = np.random.default_rng(42)\nresult = np.array_equal(rng1.random(5), rng2.random(5))\nassert result == __",
        solution: "True",
        test: "",
        hint: "Two generators seeded identically produce identical sequences. Always."
    },
    {
        id: "random_sampling_10",
        title: "Different Seeds, Different Worlds",
        description: "Change the seed and the entire universe shifts.",
        code: "rng1 = np.random.default_rng(42)\nrng2 = np.random.default_rng(99)\nresult = np.array_equal(rng1.random(5), rng2.random(5))\nassert result == __",
        solution: "False",
        test: "",
        hint: "Different seeds produce different sequences. The chance of them matching is astronomically small."
    }
];
