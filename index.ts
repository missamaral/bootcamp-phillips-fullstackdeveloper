//interfaces

interface IAnimal {
    name: string;
    type: 'land' | 'water';
    domesticated: boolean;
}

interface IFeline extends IAnimal {
    nightVision: boolean;
}

interface ICanine extends IAnimal {
    size: 'small' | 'medium-sized' | 'large';
}

const animal: IAnimal = {
    name: 'Elephant',
    type: 'land',
    domesticated: true,
}

const feline: IFeline = {
    domesticated: false,
    name: 'Lion',
    type: 'land',
    nightVision: true,
}

//types

type IDomesticated = IFeline | ICanine;

const animal2: IDomesticated = {
    domesticated: true,
    name: 'dog',
    size: 'medium-sized',
    type: 'land',
    nightVision: false,
}

const input = document.getElementById('input') as HTMLInputElement;
input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});

// generic types <T>

function appendToList<T> (array: T[], value: T) {
    return array.map(() => value);
}

appendToList([1,2,3], 5);

//conditional params

interface IUser {
    id: string;
    email: string;
}

interface IAdmin extends IUser {
    position: 'manager' | 'coordinator' | 'supervisor';
}

function redirect (user: IUser | IAdmin) {
    if ('position' in user) {
        //redirect to admin area
    } else {
        //redirect to user area
    }
}

//optional variables

interface IUser {
    name: string;
    email: string;
    phoneNumber?: string; //the question mark makes this item optional
}

//private and readonly

interface Dog {
    name: string;
    age: number;
    favoritePark?: string;
}

//minus sign is eliminating optional items; plus sign is only improving readability
type ReadOnlyDog = {
    +readonly [K in keyof Dog]-?: Dog[K];
}

const myDog: Dog = {
    name: 'Apolo',
    age: 14,
}

class MyDog implements ReadOnlyDog {
    age;
    name;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const dog = new MyDog('Apolo', 14);

//libraries

import $ from 'jquery';

npm i --save-dev @types/jquery

//omit and other Utility types

interface Person {
    name: string;
    age: number;
    nationality: string;
}

interface Brazilian extends Omit<Person, 'nationality'> {

}