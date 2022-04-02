/*
1. Create a function that receives the array [students] and a number that will represent the final average grade;
2. Go through the array and populate a new auxiliary array with the students whose grades are equal or greater than the final average grade;
3. Use object destructuring to manipulate the desired properties of each student.
*/

const students = [
     {
        name: 'John Allen',
        grade: 6.5,
        class: '1A',
    },
    {
        name: 'Mary Bosch',
        grade: 7.0,
        class: '1B',
    },
    {
        name: 'Sharon Callaghan',
        grade: 4.5,
        class: '1A',
    },
    {
        name: 'Prosper Danes',
        grade: 9.5,
        class: '1C',
    },
    {
        name: 'Emma Fullough',
        grade: 10.0,
        class: '1B',
    },
]

function passingGrade (students, averageGrade) {

    let passList = [];

    for (let i = 0; i < students.length; i++) {

        const {grade, name} = students[i];
        
        if (grade >= averageGrade) {
            passList.push(name);
        };

    };

    return passList;
    
};

console.log(passingGrade(students, 7.0));