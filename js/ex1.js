// Ex Sheet 1

// Ex 1
console.log("This is ex1.js");

// Ex 2
var firstName = "A";
var lastName = "T";
var yearOfBirth = 2000;
document.getElementById("student_message").innerHTML = "Hi, my name is " + firstName + " " + lastName +
    ", I'm  " + (new Date().getFullYear() - yearOfBirth)  + "years old and I'm learning Javascript";

// Ex 3
var firstNumber = parseInt(document.getElementById("num_1").innerHTML);
var secondNumber = parseInt(document.getElementById("num_2").innerHTML);
var result = (firstNumber + secondNumber) / 2;
result = result.toFixed(2);
document.getElementById("result").innerHTML = result;

// Ex 4
var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;
phone3 = phone3.toString();

console.log(phone1.length == 9);
console.log(phone2.length == 9);
console.log(phone3.length == 9);

// Ex 5
console.log(Math.pow(32, 6));

// Ex 6
/*
a) var NAME; VALID

b) var $num1; VALID

c) var typeof; NO VALID, keyword reserved for the operator

d) var first-name; NOT VALID, DASHES ARE NOT ALLOWED

e) var attempt_2; VALID

f) var 2ndAttempt; NOT VALID, SHOULD NOT START WITH A NUMBER

g) var full name; NOT VALID, IT SHOULD NOT CONTAIN SPACES
 */

// Ex 7
var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

// Will show: 2525
console.log(quantity += quantity);
// Will show: 4
console.log( (7+5) / number + 2 );
// Will show: undefined
console.log(pressure);
// Will show: null
console.log(temperature);
// Will show: undefined
console.log(typeof pressure);
// Will show: object
console.log(typeof temperature);

// Ex 8
var url1 = "https://" + document.getElementById("url_1").innerHTML;
document.getElementById("url_2").innerHTML = url1;

var url2 = (document.getElementById("url_3").innerHTML).replace("https://", "");
document.getElementById("url_4").innerHTML = url2;


