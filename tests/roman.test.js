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
