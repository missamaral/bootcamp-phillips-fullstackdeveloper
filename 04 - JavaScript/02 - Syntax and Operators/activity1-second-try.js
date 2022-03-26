function compareNumbers() {
    const num1= Number(prompt('Type any number to be your first value:'));
    const num2 = Number(prompt('Type any number to be your second value:'));

    if(!num1 || !num2)
    return alert('You must type numbers, not characters');

    function createString1(num1,num2) {
        let areEqual = ' ';
    
        if (num1!=num2) {
            areEqual = ' not ';
        }
        
        return `Numbers ${num1} and ${num2} are${areEqual}equal. `
    }

    function createString2(num1,num2) {
        const sum = num1+num2;
        
        let result10 = 'equal to';
        let result20 = 'equal to';
    
        if(sum > 10) {
            result10 = 'greater than'
        } else if (sum < 10) {
            result10 = 'less than'
        }
    
        if(sum > 20) {
            result20 = 'greater than'
        } else if (sum < 20) {
            result20 = 'less than'
        }
    
        return `Their sum equals ${sum}, which is ${result10} 10 and ${result20} 20.`
    }

    const string1 = createString1(num1,num2);
    const string2 = createString2(num1,num2);

    return console.log(`${string1}${string2}`);
}

compareNumbers();