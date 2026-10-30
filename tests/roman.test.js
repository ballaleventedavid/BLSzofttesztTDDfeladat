QUnit.module("Arab–római konverter");

QUnit.test("1 -> I", function (assert) {
    assert.strictEqual(arabicToRoman(1), "I");
});

QUnit.test("2 -> II", function (assert) {
    assert.strictEqual(arabicToRoman(2), "II");
});

QUnit.test("4 -> IV", function (assert) {
    assert.strictEqual(arabicToRoman(4), "IV");
});

QUnit.test("5 -> V", function (assert) {
    assert.strictEqual(arabicToRoman(5), "V");
});

QUnit.test("9 -> IX", function (assert) {
    assert.strictEqual(arabicToRoman(9), "IX");
});

QUnit.test("10 -> X", function (assert) {
    assert.strictEqual(arabicToRoman(10), "X");
});

QUnit.test("40 -> XL", function (assert) {
    assert.strictEqual(arabicToRoman(40), "XL");
});

QUnit.test("50 -> L", function (assert) {
    assert.strictEqual(arabicToRoman(50), "L");
});

QUnit.test("90 -> XC", function (assert) {
    assert.strictEqual(arabicToRoman(90), "XC");
});

QUnit.test("100 -> C", function (assert) {
    assert.strictEqual(arabicToRoman(100), "C");
});

QUnit.test("400 -> CD", function (assert) {
    assert.strictEqual(arabicToRoman(400), "CD");
});

QUnit.test("500 -> D", function (assert) {
    assert.strictEqual(arabicToRoman(500), "D");
});

QUnit.test("900 -> CM", function (assert) {
    assert.strictEqual(arabicToRoman(900), "CM");
});

QUnit.test("1000 -> M", function (assert) {
    assert.strictEqual(arabicToRoman(1000), "M");
});

QUnit.test("0 -> hiba", function (assert) {
    assert.throws(function () {
        arabicToRoman(0);
    }, RangeError);
});

QUnit.test("3 -> III", function (assert) {
    assert.strictEqual(arabicToRoman(3), "III");
});

QUnit.test("6 -> VI", function (assert) {
    assert.strictEqual(arabicToRoman(6), "VI");
});

QUnit.test("14 -> XIV", function (assert) {
    assert.strictEqual(arabicToRoman(14), "XIV");
});

QUnit.test("49 -> XLIX", function (assert) {
    assert.strictEqual(arabicToRoman(49), "XLIX");
});

QUnit.test("99 -> XCIX", function (assert) {
    assert.strictEqual(arabicToRoman(99), "XCIX");
});

QUnit.test("1987 -> MCMLXXXVII", function (assert) {
    assert.strictEqual(arabicToRoman(1987), "MCMLXXXVII");
});

QUnit.test("2026 -> MMXXVI", function (assert) {
    assert.strictEqual(arabicToRoman(2026), "MMXXVI");
});

QUnit.test("3999 -> MMMCMXCIX", function (assert) {
    assert.strictEqual(arabicToRoman(3999), "MMMCMXCIX");
});

QUnit.test("58 -> LVIII", function (assert) {
    assert.strictEqual(arabicToRoman(58), "LVIII");
});

QUnit.test("1994 -> MCMXCIV", function (assert) {
    assert.strictEqual(arabicToRoman(1994), "MCMXCIV");
});

QUnit.test("-1 -> hiba", function (assert) {
    assert.throws(function () {
        arabicToRoman(-1);
    }, RangeError);
});

QUnit.test("4000 -> hiba", function (assert) {
    assert.throws(function () {
        arabicToRoman(4000);
    }, RangeError);
});

QUnit.test("1.5 -> hiba", function (assert) {
    assert.throws(function () {
        arabicToRoman(1.5);
    }, RangeError);
});
