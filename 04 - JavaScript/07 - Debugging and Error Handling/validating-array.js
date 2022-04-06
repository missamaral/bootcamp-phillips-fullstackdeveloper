function validateArray(arr, num) {
    try {
        if(!arr && !num) throw new ReferenceError("Input parameters");

        if(typeof arr !== 'object') throw new TypeError("Array must be of Object type");

        if(typeof num !== 'number') throw new TypeError("Num must be of Number type");

        if(arr.length !== num) throw new RangeError("Invalid length");

        return arr;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("This is a Reference Error")
            console.log(e.name)
            console.log(e.message)
            console.log(e.stack)
        } else if (e instanceof TypeError) {
            console.log("This is a Type Error")
            console.log(e.name)
            console.log(e.message)
            console.log(e.stack)
        } else if (e instanceof RangeError) {
            console.log("This is a Range Error")
            console.log(e.name)
            console.log(e.message)
            console.log(e.stack)
    } else {
        console.log("Unexpected error:" + e)
    }
}

console.log(validateArray());