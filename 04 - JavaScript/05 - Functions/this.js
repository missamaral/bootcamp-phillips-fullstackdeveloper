// Given the function calculateAge, use the call and apply methods to change the alue of this. Make your own objects for this exercise.

function calculateAge(years) {
    return `In ${years} years, ${this.name} will be ${this.age + years} years old.`;
}

const person1 = {
    name: 'Flávia',
    age: 38,
};

const person2 = {
    name: 'Gustavo',
    age: 41,
};

const pet = {
    name: 'Gandalf',
    age: 6,
    breed: 'Tabby',
}

console.log(calculateAge.apply(person1, [8]));