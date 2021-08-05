// #1

function get_countries() {
    $.ajax({
        url: "https://restcountries.eu/rest/v2/all",
        type: "GET",
        dataType: "json",
        success: function(data){
            populate_countries(data);
            if (localStorage.selectedCountry) {
                $("#countries").val(localStorage.selectedCountry);
                var countryName = $("#countries option:selected").text();
                get_holidays(localStorage.selectedCountry, countryName);

            }
        },
        error: function() {
            console.log("Error in the request");
        }
    });
}

function populate_countries(countries) {
    for(var i = 0; i < countries.length; i++) {
       var countryOption = "<option value='" + countries[i].alpha3Code + "'>" + countries[i].name + "</option>";
        document.getElementById("countries").innerHTML += countryOption;
    }
}

$("#countries").change(function() {
    localStorage.setItem("selectedCountry", $("#countries").val()); 
    var countryName = $("#countries option:selected").text();
    get_holidays($("#countries").val(), countryName);
});

get_countries();

// #2

var courses = '[{"title": "PHP","reviews": []},{"title": "Javascript","reviews": [5,5,4.5,4,5,5,5,4.5]},{"title": "Python","reviews": [5,5,4,4,5,3,5,4,4,5]},{"title": "Machine Learning","reviews": [5,5,4.5]}]';

function average_reviews(data) {
    var courses = JSON.parse(data);
    
    for (var i = 0; i < courses.length; i++) {
        var reviews = courses[i].reviews;

        try {
            if (reviews.length == 0) {
                throw("No reviews");
            } else if (reviews.length < 5) {
                throw("Not enough reviews yet");
            }

        var sumReviews = 0;
        for (var j = 0; j < reviews.length; j++) {
            sumReviews += reviews[j];
        }
        var averageReviews = sumReviews / reviews.length;
        courses[i].averageRating = averageReviews.toFixed(1);

        } catch (err) {
            courses[i].averageRating = err;
        }
    }
    return JSON.stringify(courses);
}

console.log(average_reviews(courses));

// #3

$("#selectedCountry").text("");
$("#previousYear").text("");
$("#holidayList").html("");

function get_holidays(countryCode, countryName) {
    var previousYear = new Date().getFullYear() - 1;
    // console.log(previousYear);
    $.ajax({
        url: "https://holidayapi.com/v1/holidays?pretty&key=" + "f558ad0c-b582-42d8-99e1-8c4bbbf9a3c4" + "&country=" + countryCode + "&year=" + previousYear,
        type: "GET",
        dataType: "json",
        success: function(data){
           var holidays = data.holidays;

           $("#selectedCountry").text(countryName);
           $("#previousYear").text(previousYear);

           $("#holidayList").html("");
           for (var a = 0; a < holidays.length; a++) {
               if (holidays[a].public) {
                    var listItems = "<li>";
                    listItems += holidays[a].date + " - " + holidays[a].name;
                    listItems += "</li>";

                    $("#holidayList").append(listItems);
               }
           }
        },
        error: function() {
            console.log("Error in the request");
        }
    });
}