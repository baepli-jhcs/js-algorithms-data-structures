function telephoneCheck(str) {
    if ((/[a-z]+/gi).test(str)) return false;
    if ((/^\-/).test(str)) return false;
    if ((/\(/gi).test(str) && !(/\)/gi).test(str)) return false;
    if ((/\)/gi).test(str) && !(/\(/gi).test(str)) return false;
    if (str.length == 10 && str.split("").every(item => (/\d/).test(item))) return true;
    let split = str.match(/\d+/gi);
    if (split.length < 3) return false;
    if (split.length == 4) {
        if (split[0] != 1) return false;
        split.shift();
    }
    for (let i = 0; i < 2; i++) {
        if (!(/^\d{3}$/).test(split[i])) return false;
    }
    if (!(/^\d{4}$/).test(split[2])) return false;
    return true;
}

console.log(telephoneCheck("(555)-555-5555"));