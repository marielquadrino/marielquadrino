"use strict";

const messageWrapper = document.getElementById('message');




const number = parseInt(prompt('Enter a number'));
const number2 = parseInt(prompt('Enter a second number'));
const number3 = parseInt(prompt('Enter a third number'));
const number4 = parseInt(prompt('Enter a fourth number'));
 alert(number * number2 - number3 + number4)


message += 'Your first number is ' + number + ' ';




message+= '\nYour second number is ' + number2

message+= '\nYour third number is ' + number3

message+= '\nYour fourth number is ' + number4

messageWrapper.innerText = message;

