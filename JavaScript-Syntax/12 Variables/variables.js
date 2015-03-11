//Write a JavaScript function variablesTypes(value) that accepts the following parameters:
//name, age, isMale (true or false), array of your favorite foods.
//The function must return the values of the variables and their types.

'use strict';

function variablesTypes(value) {
    var name = 'My name: ' + value[0] + ' //type is ' + typeof value[0];
    var age = 'My age: ' + value[1] + ' //type is ' + typeof value[1];
    var gender = 'I am male: ' + value[2] + ' //type is ' + typeof value[2];
    var favFoods = 'My favorite foods are: ';

    for (var index in value[3]) {
        favFoods += index < value[3].length - 1 ? value[3][index] + ', ' : value[3][index] + ' //type is: ' + typeof value[3];
    }
    return (name + '\r\n' + age + '\r\n' + gender + '\r\n' + favFoods);
}

console.log(variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]));