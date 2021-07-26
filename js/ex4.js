
// # 1
var shipments =
    {
        'standard': {
            'leadTime': 7,
            'fee': 2
        },
        'express': {
            'leadTime': 3,
            'fee': 4.5
        }
    };

document.getElementById("shipments").onchange = function() {

    var selectedOption = document.getElementById("shipments").value;
    var leadTime = shipments[selectedOption].leadTime;
    var fee = shipments[selectedOption].fee;

    var orderDate = new Date();
    var deliveryDate = new Date( orderDate.getTime() + (86400000 * leadTime) );

    document.getElementById("order_date").innerHTML = orderDate.toISOString().slice(0,10);
    document.getElementById("delivery_date").innerHTML = deliveryDate.toISOString().slice(0,10);
    document.getElementById("delivery_fee").innerHTML = fee.toFixed(2);


}


// # 2

var phones = {
    'iphone_se_red': {
        'name': 'iPhone SE 64GB Red',
        'price': 450,
        'currency': 'US$',
        'imageUrl': "https://s13emagst.akamaized.net/products/30019/30018361/images/res_ec8bc3ad9a12a6353ef2973c96159e80.jpg"
    },
    'iphone_11_black': {
        'name': 'iPhone 11 128GB Black',
        'price': 869,
        'currency': 'EUR',
        'imageUrl': "https://s13emagst.akamaized.net/products/25344/25343941/images/res_99d57ec9e3d9bb8d3242f384288ce0a3.jpg"
    },
    'iphone_8_plus_silver': {
        'name': 'iPhone 8 Plus 64GB Silver',
        'price': 519,
        'currency': 'US$',
        'imageUrl': "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone8plus-silver?wid=1400&hei=1400&fmt=jpeg&qlt=95&.v=1563561930836"
    }
};

var radioItems = document.getElementsByName("product");

for (var a = 0; a < radioItems.length; a++) {

    radioItems[a].onchange = function() {

        for (var b = 0; b < radioItems.length; b++) {

            if (radioItems[b].checked) {
                var selectedRadio = radioItems[b].value;

                document.getElementById("phone_name").innerHTML = phones[selectedRadio].name;
                document.getElementById("phone_price").innerHTML = phones[selectedRadio].currency + (phones[selectedRadio].price.toFixed(2)).toString();
                document.getElementById("phone_image").src = phones[selectedRadio].imageUrl;

            }

        }

    }

}


// # 3

// stopwatch
// start_stop
// reset

var isRunning = false,
    startTime,
    currentTime,
    elapsedTime = 0,
    clockInterval,
    hours,
    minutes,
    seconds,
    remainder,
    formattedTime;

function add_leading_zero(number){
    if(number < 10) {
        return "0" + number.toString();
    } else {
        return number.toString();
    }
}

document.getElementById("start_stop").onclick = function() {

    if (!isRunning) {
        // start the clock
        isRunning = true;

        if (elapsedTime == 0) {
            startTime = new Date().getTime();
        } else {
            startTime = new Date().getTime() - elapsedTime;
        }

        clockInterval = window.setInterval(function(){

            currentTime = new Date().getTime();
            elapsedTime = currentTime - startTime;

            // per hour 3600000
            // per minute 60000
            // per second 1000
            hours = Math.floor(elapsedTime / 3600000);
            remainder = elapsedTime - (hours * 3600000);

            minutes = Math.floor(remainder / 60000);
            remainder -= (minutes * 60000);

            seconds = Math.floor(remainder / 1000);
            remainder -= (seconds * 1000);

            formattedTime = add_leading_zero(hours) + ":" + add_leading_zero(minutes) + ":" + add_leading_zero(seconds) + ":" + add_leading_zero(remainder);


            document.getElementById("stopwatch").innerHTML = formattedTime;

        },10);

    } else {
        // stop the clock
        window.clearInterval(clockInterval);
        isRunning = false;

    }

}

document.getElementById("reset").onclick = function() {

    startTime = new Date().getTime();
    if (!isRunning) {
        elapsedTime = 0;
        document.getElementById("stopwatch").innerHTML = "00:00:00 000";
    }
}