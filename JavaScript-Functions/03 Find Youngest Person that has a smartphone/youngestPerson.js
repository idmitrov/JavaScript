'use strict';

function findYoungestPerson(array) {
    array = array.filter(function (person) {
        return person.hasSmartphone;
    });
    var youngestPerson = Number.MAX_VALUE;
    array.forEach(function(person) {
        if (person.age < youngestPerson) {
            youngestPerson = person.age;
        }
    });
    array.forEach(function (personWithPhone) {
        if (personWithPhone.age === youngestPerson) {
            console.log('The youngest person is ' + personWithPhone.firstname + ' ' + personWithPhone.lastname);
        }
    });
}

//PREDEFINED ARRAY
var people = [
    {firstname: 'George', lastname: 'Kolev', age: 32, hasSmartphone: false},
    {firstname: 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true},
    {firstname: 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true},
    {firstname: 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false}];

findYoungestPerson(people);