const num1= Number(prompt('Type any number to be your first value:'));
const num2 = Number(prompt('Type any number to be your second value:'));
const sum = num1+num2;
const equalNumbers = num1==num2;

equalNumbers ? console.log(`Numbers ${num1} and ${num2} are equal.`) : console.log(`Numbers ${num1} and ${num2} are not equal.`);

sum>10 ? console.log(`Their sum equals ${sum}, which is greater than 10`) : console.log(`Their sum equals ${sum}, which is less than 10`);

sum>20 ? console.log(`and greater than 20.`) : console.log(`and less than 20.`);