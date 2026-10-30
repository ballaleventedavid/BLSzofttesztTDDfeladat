const ROMAN_SYMBOLS = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
];

function arabicToRoman(number) {
    if (!Number.isInteger(number) || number < 1 || number > 3999) {
        throw new RangeError("1 és 3999 közötti egész számot adon meg");
    }

    let remaining = number;
    let result = "";

    for (const [value, symbol] of ROMAN_SYMBOLS) {
        while (remaining >= value) {
            result += symbol;
            remaining -= value;
        }
    }

    return result;
}
