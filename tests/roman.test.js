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
