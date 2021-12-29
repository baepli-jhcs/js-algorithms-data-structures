function convertToRoman(num) {
    let originalArr = [];
    let romanArr = [];
    num = Array.from(String(num), Number);
    for (let i = 4; i > num.length; i--) {
        originalArr.push(0);
    }
    for (let i = 0; i < num.length; i++) {
        originalArr.push(num[i]);
    }
    for (let i = 0; i < originalArr.length; i++) {
        romanArr.push(toRoman(originalArr[i], i));
    }
    console.log(romanArr);
    return romanArr.join("");
}

function toRoman(integer, place) {
    if (integer == 0) return "";
    //Works up to 3999
    let numerals = [["M", "M", "M"], ["M", "D", "C"], ["C", "L", "X"], ["X", "V", "I"]];
    if (integer < 4) {
        return (numerals[place][2]).repeat(integer);
    } else if (integer == 4) {
        return (numerals[place][2] + numerals[place][1]);
    } else if (integer < 9) {
        return (numerals[place][1] + (numerals[place][2]).repeat(integer - 5));
    } else {
        return (numerals[place][2] + numerals[place][0]);
    }
}

convertToRoman(3999);