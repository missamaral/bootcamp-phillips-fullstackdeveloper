//throw is a key word used for error handling

if(!string) throw "Not a string";

//try catch is a block that checks for errors in the try part, and handles the error in the catch part

function tryCatchExample(string) {
    try {
        verifyPalindrome(string)
    } catch(e) {
        throw e;
    }
}

tryCatchExample(' ');

//finally is an instruction that will be executed regardless of errors having been caught or not

function tryCatchExample(string) {
    try {
        return verifyPalindrome(string)
    } catch(e) {
        throw e;
    } finally {
        console.log('This is your string');
    }
}

//the Error object

new Error(message, fileName, lineNumber)

const MyError = new Error('Invalid Message');

throw MyError;

//you can name an error like this:

const MyError = new Error('Please type a message');
MyError.name = 'InvalidMessage';

throw MyError;

