"use strict";

const messageWrapper = document.getElementById('message');



const name = prompt('What is your name?');
const number = prompt('Enter a number');
const number2 = prompt('Enter a second number');
const number3 = prompt('Enter a third number');
const number4 = prompt('Enter a fourth number');
 alert(number + number2 + number3 + number4)

let message = 'Hello, ' + name + '!\n';
message += 'Your first number is ' + number + ' ';




message+= '\nYour second number is ' + number2

message+= '\nYour third number is ' + number3

message+= '\nYour  number is ' + number4

messageWrapper.innerText = message;

