function palindrome(str) {
    str = str.split("").filter(item => (/[A-Za-z0-9]/).test(item)).join("").toLowerCase();
    console.log(str);
    let i = 0; let j = str.length - 1;
    while (i < j) {
        if (str[i] != str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

palindrome("eye");