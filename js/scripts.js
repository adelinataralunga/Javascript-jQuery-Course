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
// var personsName = "John";

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

/*var orderDate = new Date("2021-03-26");
var deliveryDate = new Date("2021-04-02");
var leadTime = (deliveryDate - orderDate) / 86400000;

document.getElementById("delivery_time").innerHTML = Math.floor(leadTime);*/

// *********
// Lesson 27
// *********
/*console.log("Message 1");
window.setTimeout(function () {
    console.log("Message 2");
}, 3000);*/

/*
document.getElementById("show-loader").onclick = function () {
    document.getElementById("spinner-loader").style.display = "block";
    window.setTimeout(function () {
        document.getElementById("spinner-loader").style.display = "none";
    }, 2000);
};
*/

/*var count = 0;

var timeInterval = window.setInterval(function () {
    console.log(count);
    count++;
    if (count >= 5) {
        window.clearInterval(timeInterval);
    }
}, 1000);*/

// Challenge
/*function add_leading_zero (number) {
    if (number < 10) {
        return "0" + number.toString();
    } else {
        return number.toString();
    }
}

var timeInterval = window.setInterval(function () {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    document.getElementById("hours").innerHTML = add_leading_zero(hours);
    document.getElementById("minutes").innerHTML = add_leading_zero(minutes);
    document.getElementById("seconds").innerHTML = add_leading_zero(seconds);
}, 1000);*/

// *********
// Lesson 28
// *********
/*var x = 0;
while (x < 10) {
    console.log(x);
    x++;
    if (x == 5) {
        break;
    }
}*/

/*var y = 0;
while (y < 20) {
    y++;
    if (y % 2 != 0) {
        continue;
    }
    console.log(y);
}*/

// *********
// Lesson 29
// *********
/*document.getElementById("show_option").onclick = function () {
  var selectField = document.getElementById("options");
  var selectedOption = selectField.options.selectedIndex;
  var selectedValue = selectField.options[selectedOption];

  document.getElementById("selected_option").innerHTML = selectedValue.innerHTML;
  // console.log(selectedValue.value);

  // A better solution to get the value, only this is possible
  /!*var seletedOption = document.getElementById("options").value;
  console.log(seletedOption);*!/
};

document.getElementById("show_radio").onclick = function () {
    var radio = document.getElementsByName("gender");

    var radioSelected;
    for(var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            radioSelected = radio[i];
            document.getElementById("selected_radio").innerHTML = radioSelected.value;
        }
    }
};

document.getElementById("show_check").onclick = function () {
    var check = document.getElementsByName("interest");

    document.getElementById("selected_check").innerHTML = "<ul>";

    for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
            document.getElementById("selected_check").innerHTML +=
                "<li>" + check[i].value + "</li>";
        }
    }
    document.getElementById("selected_check").innerHTML += "</ul>";
};*/

// *********
// Lesson 30
// *********

/* document.getElementById("education_level").onchange = function () {
  // console.log("changed");
  var selectedField = document.getElementById("education_level");
  var selectedOption = selectedField.options.selectedIndex;
  var selectedValue = selectedField.options[selectedOption];
  document.getElementById("selected_level").innerHTML = selectedValue.innerHTML;
};


var check  = document.getElementsByName("meal");
for (var i = 0; i < check.length; i++) {
    check[i].onchange = function () {
        document.getElementById("selected_check").innerHTML = "<ul>";

        for (var j = 0; j < check.length; j++) {
            if (check[j].checked) {
                document.getElementById("selected_check").innerHTML += "<li>" + check[j].value + "</li>";

            }
        }

        document.getElementById("selected_check").innerHTML += "</ul>";

    };
} */


// *********
// Lesson 33
// *********

/* $("#hide").click(function() {
    // $(".example").css("display", "none");
    $(".example").hide();
}); */

// *********
// Lesson 34
// *********
/* var content = $("#sample_text").html();
console.log(content);
$("#sample_text").html("New content");

var text_content = $("#sample-text-only").text();
console.log(text_content); */

// $("#link-element").attr("href", "https://techcrunch.com/");
/* $("#change_image").click(function(){
    $("#imagem_js").attr("src", "https://www.undeprecated.com/assets/img/posts/javascript.png");
    $("#change_image").hide();
}); */

// $("#empty_paragraph").empty();
// $("#empty_paragraph").hide();
// $("#empty_paragraph").show();
// $("#empty_paragraph").remove();

// *********
// Lesson 35
// *********
/* var contentInput = $("#name_field").val();
console.log(contentInput);
$("#name_field").val("Peter Green"); */

// GETTING THE VALUE OF A SELECTED OPTION (FROM SELECT BOX)
/* var selectedValue = $("#options").val();
console.log("The option: ", selectedValue); */

// GETTING THE TEXT (LIKE INNERHTML) OF A SELECTED OPTION (FROM SELECT BOX)
/* var selectedText = $("#options option:selected").text();
console.log("The selected value: ", selectedText); */

// On change event showing the value in the console
/* $("#options").change(function () {
    var newValue = $("#options option:selected").text();
    console.log(newValue);
}); */

/* $("input[name = 'gender']").change(function() {
    console.log($("input[name = 'gender']:checked").val());
}); */

// Using the parent methd to get the span element that we used to wrap the text with the input field
// So we only get the text, no HTML
/* $("input[name='gender']").change(function() {
    var textRadio  = $("input[name = 'gender']:checked").parent().text();
    console.log(textRadio);
}); */

// Let's also get the updated value
/* $("input[name='gender']").change(function() {
    var newRadioValue = $("input[name='gender']:checked").parent("span").text();
    console.log(newRadioValue);
}); */

/* $("input[name='interest']").change(function() {
    var selectedCheckboxes = $("input[name='interest']:checked");
    var texts = [];

    $.each(selectedCheckboxes, function(index, value) {
        // console.log($(value).parent().text());
        texts.push($(value).parent("span").text());
    });
    console.log(texts);
}); */


// *********
// Lesson 36
// *********
/* $("#add_class").click(function() {
    $("#example-paragraph").addClass("styling");
});

$("#remove_class").click(function() {
    $("#example-paragraph").removeClass("styling");
});

$("#toggle_class").click(function() {
    $("#example-paragraph").toggleClass("styling");
}); */

// *********
// Lesson 37
// *********
/* $(document).ready(function() {
    // Usually all th code will go inside this function
}); */

// Ready event for the document object
// This is the same as setting the ready event to the body of the page
/* $(function() {
    // Add all the code of your page inside here
}); */

/* $("element").on("click", function() {

}); */

// Passing on an object
/* $("element").on({
    // Key - value
    click: function() {
        // Code to be executed
    },
    mouseenter: function() {

    }
}); */

// Solution to the challenge

//$("#fullName").keyup(function() {
    /* if ($("#fullName").val() == "") {
        $("#submit").hide();
    } else {
        $("#submit").show();
    } */

    // Ternary if
    //$("#fullName").val() == "" ? $("#submit").hide() : $("#submit").show();
//});

// *********
// Lesson 38
// *********
/* $( "#hide-button" ).click(function() {
    // With callback funtion that will be executed after the previous function ends
    // because JavaScript can also be asynchronous
    // In programming, synchronous operations block instructions until the task is completed, 
    while asynchronous operations can execute without blocking other operations. Asynchronous 
    operations are generally completed by firing an event or by calling a provided callback function.
    $(this).hide(2000, function() {
        $("#hidden-text").show();
    });
}); */


/* $( "#hide-button" ).click(function() {
    $(this).hide(2000);
    $("#hidden-text").show();
}); */

/* $("#toggle-tab").click(function() {
    $("#tab-content").slideToggle("slow");
    $("#toggle-tab").toggleClass("flip");
    
}); */

// *********
// Lesson 39
// *********
/* $("#animate").click(function(){
    $("#square").animate({
        width: '+=50px',
        height: '+=50px',
        marginLeft: '+=50px'
    });
});  */

// *********
// Lesson 40
// *********
/* function get_user(callback){
    var u = {
        'name': 'John'
    };

    window.setTimeout(function() {
        callback(u);
    }, 1000);
}
        
function greet_user(user) {
    console.log('Hi ' + user.name + ', how are you?');
}

function goodbye_user(user) {
    console.log('Goodbye, ' + user.name + '!');
}
        
get_user(greet_user);
get_user(goodbye_user);
get_user(function(user) {
    console.log("Hey " + user.name + ", this is another way of using a callback function.");
}); */

// *********
// Lesson 41
// *********
/* function get_user(){ 
    var u = {
        'name': ''
    };
    return u;
}
        
function greet_user(user) {
    console.log('Hi ' + user.name + ', how are you?');
}
        
try {
    var user = get_user();

    // if (user.name == '') { the same as below
    if (!user.name) {
        throw 'Name is empty';
    }

    greet_user(user);
} catch (err) {
    console.log(err);
    console.log("Hi guest user, how are you?");
} finally {
    console.log('New line of code inside the finally block.');
} */

// *********
// Lesson 42
// *********
/* var bestSellersSlider = {};

// Creating the properties
bestSellersSlider.products = ['product 1', 'product 2', 'product 3'];
bestSellersSlider.interval = 3000; */

/* var bestSellersSlider = {
    products: ['product 1', 'product 2', 'product 3'],
    interval: 3000,

    get_products: function() {
        console.log(this.products);
    }
}; */

// *********
// Lesson 43
// *********

// Object
/* var employee = {
    'name': "Maria Silva",
    'birth_date': '1988-10-01'
};

// String: typeof employee_JSON
// So JSON is a String representation of an object
var employee_JSON = JSON.stringify(employee);
console.log(employee_JSON);

var employee_obj = JSON.parse(employee_JSON);
console.log(employee_obj); */

// *********
// Lesson 44
// *********
// The value always needs to be a String for localStorage
//  window.localStorage.setItem("name", "Selena");

// Using JSON to send an Object to the local storage
/* var person = {name: "Ivan", age: "34"};
localStorage.setItem('person', JSON.stringify(person));

// Getting it back
console.log(JSON.parse(localStorage.person).name); */

// remove from the console
// localStorage.removeItem("name");

// sessionStorage.setItem("preference", "beach");

// Practical example

/* $("#submit-name").click(function() {
    var name = $("#name-user").val();

    // If the name is empty
    if (!name) {
        alert("Please type your name");
    } else {
        localStorage.setItem("name", name);
        greet_user();
    }
    $("#name-user").val("");
});

$("#not-me").click(function() {
    localStorage.removeItem("name");
    $("#welcome-area").hide();
    $("#name-field").show();
});

function greet_user() {
    $("#name-field").hide();

    $("#welcome-text").text("Hi " + localStorage.name + ", how are you?");
    $("#not-me").text("Not " + localStorage.name + "?");
    
    $("#welcome-area").show();
}

// If it exists
if (localStorage.name) {
    greet_user();
} */

// *********
// Lesson 47
// *********
/* var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var responseObject = JSON.parse(this.responseText);

        var question = responseObject.results[0].question;
        var answers = responseObject.results[0].incorrect_answers;
        answers.push(responseObject.results[0].correct_answer);

        console.log("The question is", question);
        console.log("The answers are", answers);
    }
};

xhttp.open("GET", "https://opentdb.com/api.php?amount=1");
xhttp.send(); */

// *********
// Lesson 48
// *********
$.ajax({
    url: "https://opentdb.com/api.php?amount=1",
    type: "GET",
    dataType: "json",
    success: function(data) {
        present_question(data);
    },
    error: function() {
        console.log('Error in the request');
    }
})/* .done(function(data) {
    present_question(data);
}).fail(function() {
    console.log('Error in the request');
}) */;

function present_question(data) {
    var question = data.results[0].question;
    var answers = data.results[0].incorrect_answers;
    answers.push(data.results[0].correct_answer);

    console.log("The question is", question);
    console.log("The answers are", answers);
}