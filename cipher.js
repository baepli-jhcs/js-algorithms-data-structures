function rot13(str) {
    str = str.toUpperCase();
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (/[A-Z]/.test(str[i])) {
            let j = str.charCodeAt(i);
            j = String.fromCharCode((j - 52) % 26 + 65);
            newStr += j;
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

rot13("SERR PBQR PNZC");