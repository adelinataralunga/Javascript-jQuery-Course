// *********
// Lesson 5
// *********
// var user_name = "Adam"
// document.getElementById("user_greeting_message").innerHTML = "Hello " + user_name + "!";

// *********
// Lesson 11
// *********
function sum_numbers() {
    var num1 = 5;
    var num2 = 7;
    var sum = num1 + num2;
    console.log(sum);
}
// sum_numbers();

function sum_args(num1, num2) {
    var sum = num1 + num2;
   return sum;
}
// document.getElementById("sum_result").innerHTML = sum_args(-27, 55);

// *********
// Lesson 13
// *********
var employee = {
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
console.log(courses[1].categories[0]);

// *********
// Lesson 14
// *********
var student = {
  'firstName': 'Marie',
  'lastName': 'Smith',
  'fullName': function () {
      return this.firstName + " " + this.lastName;
  }
};

// *********
// Lesson 13
// *********     