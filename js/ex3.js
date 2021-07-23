// Ex 1
function celsiustoFahrenheit(celsius) {
    var fahrenheit = (9 * celsius / 5) + 32;
    return fahrenheit;
}
document.getElementById("convert").onclick = function () {
    var temperatureCelsius = document.getElementById("temp_celsius").value;

    if (temperatureCelsius == "") {
        alert("Temperature is not specified.");
    } else {
        document.getElementById("temp_fahr").innerHTML = celsiustoFahrenheit(temperatureCelsius);
    }
}

// Ex 2
var currentYear = 2022;

document.getElementById("anos_copa").innerHTML = "";
while (currentYear <= 2050){
    document.getElementById("anos_copa").innerHTML += "<li>" + currentYear + "</li>";
    currentYear +=4;
}

// Ex 3
document.getElementById("calculate").onclick = function () {
    var grade1 = parseFloat(document.getElementById("grade1").value);
    var grade2 = parseFloat(document.getElementById("grade2").value);
    var absences = document.getElementById("absences").value;
    var totalClasses = 20;

    if (grade1 =="" || grade2 == "" || absences == "") {
        alert("Please fill in all three fields!");
    } else {
        var average = (grade1 + grade2) / 2;
        var presence = (totalClasses - absences) / totalClasses;

        var result;

        if (average < 6.5 && presence < 0.7) {
            result = "Insufficient grade and too many absences.";
        }
        else if (average < 6.5) {
            result = "Average is too low to be approved.";
        } else if (presence < 0.7) {
            result = "Too many absences to be approved.";
        } else {
            result = "Approved";
        }
        document.getElementById("result").innerHTML = result;
    }
}


// Ex 4
var sales = [

    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null

    },

    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null

    },

    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'

    },

    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null

    },

    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null

    }

];

document.getElementById("course_sales").innerHTML = "";
var totalSales = 0;

for (var i = 0; i < sales.length; i++) {
    var sale = sales[i];

    if (!sale.refundRequested) {
        var line = "<tr>";
        line += "<td>" + sale.student + "</td>";
        line += "<td>" + sale.date + "</td>";
        line += "<td>" + sale.amount.toString() + "</td>";
        line += "</tr>"
        document.getElementById("course_sales").innerHTML += line;

        totalSales += sale.amount;
    }
}
document.getElementById("total_sold").innerHTML = totalSales.toString();


