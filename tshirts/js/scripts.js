
var products = {
    'white': {
        
        'plain': {
            'unit_price': 5.12,
            'photo': 'v-white.jpg' 
        },
        'printed': {
            'unit_price': 8.95,
            'photo': 'v-white-personalized.jpg' 
        }
    },
    
    'colored': {
        'plain': {
            'unit_price': 6.04,
            'photo': 'v-color.jpg' 
        },
        'printed': {
            'unit_price': 9.47,
            'photo': 'v-color-personalized.png' 
        }
    }
}


// Search params

var search_params = {
    "quantity": "",
    "color": "",
    "quality": "",
    "style": "",
}


// Additional pricing rules:

// 1. The prices above are for Basic quality (q150). 
// The high quality shirt (190g/m2) has a 12% increase in the unit price.

// 2. Apply the following discounts for higher quantities: 
    // 1: above 1.000 units - 20% discount
    // 2: above 500 units - 12% discount
    // 3: above 100 units - 5% discount


// Solution:

$(function(){
    //$("#quantity").val()
    //$("#color .option-button.selected").attr('id')
    //$("#quality .option-button.selected").attr('id')
    //$("#style").val()
    
    function update_params() {
        search_params.quantity = parseInt($("#quantity").val());
        search_params.color = $("#color .option-button.selected").attr('id');
        search_params.quality = $("#quality .option-button.selected").attr('id');
        search_params.style = $("#style").val();
        //console.log(search_params);
        update_order_details();
    }

    function update_order_details() {
        $(".refresh-loader").show();

        var qualityId = "#" + search_params.quality;
        $("#result-quality").html( $(qualityId).text() );
       
        var colorId = "#" + search_params.color;
        $("#result-color").html( $(colorId).text() );

        var styleSelector = "#style option[value=" + search_params.style + "]";
        //console.log(styleSelector);
        $("#result-style").html( $(styleSelector).text() );

        var quantityId = search_params.quantity;
        $("#result-quantity").html(quantityId);

        $("#total-price").text(calculate_total());

        var photoUrl = "img/" + products[search_params.color][search_params.style].photo;
        $("#photo-product").attr("src", photoUrl);

        /* In a real life situation, we wouldn't need this because in order to get the price, 
        probably you would be calling a server to get that price, taking around half a second or 
        one second and you would actually be able to see that loader.

        So things are happening so fast in our page that we can't even see it.
        If you want to simulate a delay, of course, in a real life situation, never do this.
        You shouldn't delay anything in your page.
        It should be as fast as possible.
        If you want to simulate a delay to get the information, you can just do a set time out.*/
        window.setTimeout(function() {
            $(".refresh-loader").hide();
        }, 500);
    }

    function calculate_total() {
        // Using the [] because it is dynamic and at the end .unit_price because it 
        // is an actual property of the object and it will be recognised
        var unitPrice = products[search_params.color][search_params.style].unit_price;

        if (search_params.quality == "q190") {
            // 12% increase of the price for better quality
            unitPrice *= 1.12;
        }

        // Likely we start the operation with a number so JS will automatically covert quantity to a number
        // But when we retrieve it, it is a String
        // For a better soution, I will modify the code to use parseInt from the start
        var total = unitPrice * search_params.quantity;

        // 1: above 1.000 units - 20% discount
        // 2: above 500 units - 12% discount
        // 3: above 100 units - 5% discount
        if (search_params.quantity >= 1000) {
            total *= 0.8;
        } else if (search_params.quantity >= 500) {
            total *= 0.88;
        } else if (search_params.quantity >= 100) {
            total *= 0.95;
        }

        return total.toLocaleString("en-GB", { style: "currency", currency: "GBP" });
    }

    update_params();

    $("#quantity").change(function() {
        search_params.quantity = parseInt($("#quantity").val());
        update_order_details();
    });

    $("#style").change(function() {
        search_params.style = $("#style").val();
        update_order_details();
    });

    $(".option-button").click(function() {
        var clickedParam = $(this).parent().attr('id');
        var childSelector = "#" + clickedParam + " .option-button";
        $(childSelector).removeClass("selected");
        $(this).addClass("selected");

        var selectedChild = "#" + clickedParam + " .option-button.selected";
        search_params[clickedParam] = $(selectedChild).attr('id');
        update_order_details();
    });
});










