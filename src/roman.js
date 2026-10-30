function arabicToRoman(number) {
    const symbols = [
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];
    
    let result = "";
    
    for (const [value, symbol] of symbols) {
        while (number >= value) {
            result += symbol;
            number -= value;
        }
    }
    
    return result;
}
