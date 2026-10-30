QUnit.module("Arab–római konverter");

QUnit.test("1 -> I", function (assert) {
    assert.strictEqual(arabicToRoman(1), "I");
});

QUnit.test("2 -> II", function (assert) {
    assert.strictEqual(arabicToRoman(2), "II");
});
