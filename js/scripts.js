// *********
// Lesson 5
// *********
// var user_name = "Adam"
// document.getElementById("user_greeting_message").innerHTML = "Hello " + user_name + "!";

// *********
// Lesson 11
// *********
/*function sum_numbers() {
    var num1 = 5;
    var num2 = 7;
    var sum = num1 + num2;
    console.log(sum);
}
// sum_numbers();

function sum_args(num1, num2) {
    var sum = num1 + num2;
   return sum;
}*/
// document.getElementById("sum_result").innerHTML = sum_args(-27, 55);

// *********
// Lesson 13
// *********
/*var employee = {
    'name': 'James Taylor',
    'yearOfBirth': 1948,
    'ID' : 'SBJ0001',
    'role': 'IT Analyst'
}
employee['name'] = 'James Taylor Jr.'
employee.role = 'IT Manager';
employee.passport = 'KV09888';
employee.passport = 'KV09888';
console.log(employee);

var courses = [
        {
            'title': 'Learn code in Python 3',
            'reviews': 6802,
            'students': 130129,
            'categories': ['programming', 'technology']
        },

        {
            'title': 'Learn PHP -  Beginner to Advanced',
            'reviews': 1204,
            'students': 30521,
            'categories': ['web development', 'programming']
        },

        {
            'title': 'Learn Microsoft Excel 2020',
            'reviews': 4209,
            'students': 18560,
            'categories': ['productivity', 'business']
        }
    ];
console.log(courses[1].categories[0]);*/

// *********
// Lesson 14
// *********
/*var student = {
  'firstName': 'Marie',
  'lastName': 'Smith',
  'fullName': function () {
      return this.firstName + " " + this.lastName;
  }
};*/

// *********
// Lesson 16
// *********
/*document.getElementById("click-me").onclick = function () {
    alert("You clicked this button");
}*/

/*document.getElementById("hover-me").onmouseover = function () {
    alert("You moved the cursor over me");
}

document.getElementById("leave-me").onmouseout = function () {
    alert("YYou moved the cursor out of me");
}

 document.onkeydown = function() {
     alert('You pressed a key');
}; */

/*document.onkeydown = function (event) {
    if (event.keyCode == 40) {
        alert("You pressed the arrow down key");
    } else {
        console.log("You just pressed a different key.");
    }
}

function show_alert() {
    alert("You clicked the button.");
}*/

// *********
// Lesson 17
// *********

/*
document.getElementById("color_button").onclick = function () {
    document.getElementById("color_button").style['background-color'] = "rgb(255,182,193)";
    document.getElementById("color_button").style.transform = "translateX(350px)";
}*/

/*document.getElementById("color_button").onclick = function () {
    this.style['background-color'] = "rgb(255,182,193)";
    this.style.transform = "translateX(350px)";
}*/

/*var button = document.getElementById("color_button");
button.onmouseover = function () {
    button.style['background-color'] = "rgb(255,182,193)";
    button.style.transform = "translateX(350px)";
}*/

// *********
// Lesson 18
// *********

/*var elements = document.getElementsByClassName("example");
console.log(elements);
elements[0].innerHTML = "Changing the text.";*/
// var paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);

// *********
// Lesson 19
// *********

/*for (var a=0; a<5; a++) {
    console.log(a);
}
*/

/*var students = ['Peter', 'Mary', 'Joseph', 'John', 'Charles'];
for (var a=0; a<students.length; a++) {
    console.log(students[a]);
}*/

/*var car = {
    'Year': 2018,
    'Model': 'Evoke',
    'Manufacturer': 'Land Rover',
    'FuelType': 'Diesel'

}

for (var prop in car) {
    console.log(prop + ": " + car[prop]);
}*/


// var elements = document.getElementsByClassName("example");
// for ( var a = 0; a < elements.length; a++ ) {
//     elements[a].style.color = "orange";
//     elements[a].style['font-weight'] = "bold";
// }

// *********
// Lesson 20
// *********

// var count = 0;
// while (count < 5) {
//     console.log(count);
//     count++;
// }

/*var countTwo = 10;

do {
    console.log(countTwo);
    countTwo++;
} while (countTwo < 5); // This loop requires the semicolon after the condition.*/


// *********
// Lesson 21
// *********
/*
var age = 18;

if (age < 18) {
    console.log('Underage');
} else if (age >= 65) {
    console.log("Senior");
} else {
    console.log('Adult');
}*/

// grade = 7;
// absences = 3;

// Solving the problem with &&
/*
if (grade >= 7 && absences <= 5) {
    console.log("The student has been approved.");
} else {
    console.log("The student has failed.");
}*/

// Solving the problem with ||
/*if (grade < 7 || absences > 5) {
    console.log("The student has failed.");
} else {
    console.log("The student has been approved.");
}*/

// var name = "Arial";

/*if (name) {

    console.log("The name is " + name);

} else {

    console.log("The name has not been informed");

}*/

// console.log(name ? "The name is " + name : "The name has not been informed!");

/*var myAge = 20;
console.log(myAge < 18 ? 'Underage' : myAge >= 65 ? 'Senior' : 'Adult');*/

// *********
// Lesson 22
// *********

/*
var isMember = false;
var age = 25;

if (isMember || age >= 65) {
    console.log('Free');
} else if (age < 18) {
    console.log('$ 6.00');
} else {
    console.log('$ 12.00');
}*/

/*var employees = [

    {
        'name': 'Charles Silva',
        'age': 45,
        'children': ['Andrew Silva', 'Maria Silva']

    },

    {
        'name': 'Elizabeth Green',
        'age': 32,
        'children': ['Peter Green']

    },

    {
        'name': 'George Banks',
        'age': 39,
        'children': ['Philipp Banks', 'Rose Banks', 'Tara Banks']

    }

];

document.getElementById("children").innerHTML = "";

for (var a = 0; a < employees.length; a++) {
    var childrenList = employees[a].children;

    for (var b = 0; b < childrenList.length; b++) {
        var child = childrenList[b];
        // console.log(child);
        document.getElementById("children").innerHTML += "<li>" + child + "</li>";
    }
}*/


// *********
// Lesson 23
// *********

// Global scope
var personsName = "John";

/*function create_name() {
    // Local scope
    var personsName = 'Mary';
    console.log(personsName);
}

create_name();*/

// Still global scope because if is not a function!
/*
if (true) {
    // Just replacing the same variable
    var personsName = "Mary";
    console.log(personsName);
}
console.log(personsName);
*/

// Conflict as a becomes 3 after the parent loop 0,then a will not meet the condition for parent loop 1
// for (var a = 0; a < 3; a++) {
// Solution: use let instead of just var for the variable to become local
/*for (let a = 0; a < 3; a++) {
    console.log('Parent loop: ', a);

    // for (var a = 0; a < 3; a++) {
    for (let a = 0; a < 3; a++) {
        console.log('Child loop:' , a);
    }
}*/

// The best approach is to use different variable names as some versions of Internet Explorer don't support
// ES6 so it will be a problem for some users

/*function create_name() {
    // Local scope
    name = 'I am a global variable because you forgot to use var';
    console.log(name);
}
create_name();
console.log(name);*/

// *********
// Lesson 25
// *********
/*window.onmousemove = function (e) {
    if (e.pageY < 5) {
        alert("Don't miss out our flash sale. Go to the products section for exclusive discounts.");
    }
}*/

// *********
// Lesson 26
// *********

/*var dateObj = new Date();
console.log(dateObj);*/

var orderDate = new Date("2021-03-26");
var deliveryDate = new Date("2021-04-02");
var leadTime = (deliveryDate - orderDate) / 86400000;

document.getElementById("delivery_time").innerHTML = Math.floor(leadTime);

// *********
// Lesson 27
// *********

// *********
// Lesson 28
// *********

// *********
// Lesson 29
// *********

// *********
// Lesson 30
// *********

// *********
// Lesson 31
// *********