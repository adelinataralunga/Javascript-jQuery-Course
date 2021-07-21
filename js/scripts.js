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

