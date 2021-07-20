// Ex 1
function celsiustoFahrenheit(celsius) {
    var fahrenheit = (9 * celsius / 5) + 32;
    return fahrenheit;
}
var celsius_1 = parseFloat(document.getElementById("celsius_1").innerHTML);
document.getElementById("fahr_1").innerHTML = celsiustoFahrenheit(celsius_1);

var celsius_2 = parseFloat(document.getElementById("celsius_2").innerHTML);
document.getElementById("fahr_2").innerHTML = celsiustoFahrenheit(celsius_2);

var celsius_3 = parseFloat(document.getElementById("celsius_3").innerHTML);
document.getElementById("fahr_3").innerHTML = celsiustoFahrenheit(celsius_3);

// Ex 2
var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ];
var bestStudents = classification.slice(-3);
document.getElementById("best_students").innerHTML = bestStudents;

// Ex 3
var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4,
    'totalReviews': function () {
        var total = this["5_stars_reviews"] + this["4_stars_reviews"] + this["3_stars_reviews"] +
            this["2_stars_reviews"] + this["1_stars_reviews"];
        return total;
    }
}
document.getElementById("course_title").innerHTML = course.title;
document.getElementById("main_category").innerHTML = course.categories[0];
var percetage = Math.round((course['5_stars_reviews'] / course.totalReviews()) * 100);
document.getElementById("reviews_5_stars").innerHTML = percetage.toString() + "%";

// Ex 4
var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];
shoppingList.unshift(shoppingList.pop());
shoppingList.push("Cheese", "Eggs");
console.log(shoppingList);


