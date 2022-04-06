// declaring a map

const myMap = new Map()

//methods to manipulate a map

myMap.set ('apple', 'fruit'); //create an element

myMap.get('apple'); //retrieve an element

myMap.delete ('apple'); //delete an element

// map keys, unlike objects, can be of any kind, not just string

//maps are easier to iterate, they have the length property

//you can use map when the value of the keys is unknown

//values in a map are always the same type

//declaring a set

const mySet = new Set(myArray);

//values can be repeated in an array, but in a set they are all unique

//methods to manipulate a set

mySet.add(); //include an element

mySet.has(); //checks if a set includes an element

mySet.delete(); //deletes an element

//the number of elements in a set is read by the property size, not length

//sets don't use the map, filter, reduce, etc. methods