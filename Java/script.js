/*let name = 'Vasu'; //string literal
let age = 19; // Number literal
let isApproved = true ; //Boolean Literal
let firstName ; 
let lastName = null ; //Explicitly clear value of a variable
*/

//object
let person = {
    name : 'Vasudev ' ,
    age : 19
}; 

//Dot notation
person.name = 'Vasu' ;

//Bracket Notation
let selection = 'name'
person[selection] = 'Mary' ;

console.log(person.name);

//ARRAY 
let selectedColors = ['red' , 'green' , 'blue'];
selectedColors[3] = 'yellow'
console.log(selectedColors);

//functions
function greet(firstName , lastName ){
    console.log('HELLO ' + firstName + ' ' + lastName);
}
greet('Vasudev' , 'VK');

function sum(num1 , num2){
    return num1 + num2;
}
console.log('Sum = ' + sum(1 , 1));