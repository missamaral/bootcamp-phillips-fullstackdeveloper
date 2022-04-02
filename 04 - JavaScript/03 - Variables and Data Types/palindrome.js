//solution 1

function verifyPalindrome(string) {
    if(!string) return "not a string";

    return string.split("").reverse().join("") === string;
}

console.log(verifyPalindrome("elle"))

//solution 2

function verifyPalindrome2(string){
    if (!string) return "not a string"

    for(let i = 0; i < string.length/2; i++){
        if(string[i] !== string[string.length - 1 - i]) {
        return false;
        }
    }

    return true;
}