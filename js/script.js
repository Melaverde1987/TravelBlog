var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myarray = [];
var Place = /** @class */ (function () {
    function Place(image, name, type, city, zipAddress, streetAddress, numberAddress, number2Address, created) {
        this.image = image;
        this.name = name;
        this.type = type;
        this.city = city;
        this.zipAddress = zipAddress;
        this.streetAddress = streetAddress;
        this.numberAddress = numberAddress;
        this.number2Address = number2Address;
        this.created = created;
        myarray.push(this);
    }
    Place.prototype.display = function () {
        return "\n        <div class=\"col col-12 col-md-6 col-lg-4 mb-4\">\n          <div class=\"box\">\n              <div class=\"my-2 fs-5 my_badge\"><span class='px-3 py-2 badge bg-my'>" + this.type + "</span></div>\n              <div class=\"image d-none d-md-block\">\n                  <img src=\"" + this.image + "\" alt=\"\">\n              </div>\n              <div class=\"text p-4 d-flex flex-column justify-content-between\">\n                <div class=\"title h5 mb-4 text-center fs-4 fw-bold\">" + this.name + "</div>\n                <div class=\"fs-6\"><span class=\"fw-bold\">Location:</span> " + this.zipAddress + " " + this.city + "</div>\n                <div class=\"fs-6\"><span class=\"fw-bold\">Address:</span> " + this.streetAddress + " " + this.numberAddress + this.number2Address + "</div>\n                <div class=\"fs-6 text-secondary text-end mt-4 mt-md-auto mb-0\"><span class=\"fw-bold\">Created:</span> " + this.displayDate() + "</div>\n              </div>\n          </div>\n        </div>\n        ";
    };
    Place.prototype.displayDate = function () {
        var stringDate = this.created.toLocaleDateString();
        console.log(stringDate);
        return stringDate;
    };
    return Place;
}());
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(image, name, type, city, zipAddress, streetAddress, numberAddress, number2Address, created, phoneNumber, website, typeOfCuisine) {
        var _this = _super.call(this, image, name, type, city, zipAddress, streetAddress, numberAddress, number2Address, created) || this;
        _this.phoneNumber = phoneNumber;
        _this.website = website;
        _this.typeOfCuisine = typeOfCuisine;
        return _this;
    }
    Restaurants.prototype.display = function () {
        return "\n        <div class=\"col col-12 col-md-6 col-lg-4 mb-4\">\n          <div class=\"box\">\n              <div class=\"my-2 fs-5 my_badge\"><span class='px-3 py-2 badge bg-my'>" + this.type + "</span></div>\n              <div class=\"image d-none d-md-block\">\n                  <img src=\"" + this.image + "\" alt=\"\">\n              </div>\n              <div class=\"text p-4 d-flex flex-column justify-between\">\n                <div class=\"title h5 mb-4 text-center fs-4 fw-bold\">" + this.name + "</div>\n                <div class=\"fs-6\"><span class=\"fw-bold\">Type of cuisine:</span> " + this.typeOfCuisine + "</div>\n                <div class=\"fs-6\"><span class=\"fw-bold\">Location:</span> " + this.zipAddress + " " + this.city + "</div>\n                <div class=\"fs-6\"><span class=\"fw-bold\">Address: </span> " + this.streetAddress + " " + this.numberAddress + this.number2Address + "</div>\n                <div class=\"fs-6\"><span class=\"fw-bold\">Phone:</span> +" + this.phoneNumber + "</div>\n                <div class=\"fs-6\"><span class=\"fw-bold\">Website:</span> " + this.website + "</div>\n                <div class=\"fs-6 text-secondary text-end mt-4 mt-md-auto mb-0\"><span class=\"fw-bold\">Created:</span> " + this.displayDate() + "</div>\n              </div>\n          </div>\n        </div>\n        ";
    };
    Restaurants.prototype.displayDate = function () {
        var a = this.created;
        var n = a.toLocaleDateString();
        console.log(n);
        return n;
    };
    return Restaurants;
}(Place));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(image, name, type, city, zipAddress, streetAddress, numberAddress, number2Address, created, day, EventDate, EventTime, price) {
        var _this = _super.call(this, image, name, type, city, zipAddress, streetAddress, numberAddress, number2Address, created) || this;
        _this.day = day;
        _this.EventDate = EventDate;
        _this.EventTime = EventTime;
        _this.price = price;
        return _this;
    }
    Events.prototype.display = function () {
        return "\n        <div class=\"col col-12 col-md-6 col-lg-4 mb-4\">\n          <div class=\"box\">\n              <div class=\"my-2 fs-5 my_badge\"><span class='px-3 py-2 badge bg-my'>" + this.type + "</span></div>\n              <div class=\"image d-none d-md-block\">\n                  <img src=\"" + this.image + "\" alt=\"\">\n              </div>\n              <div class=\"text p-4 d-flex flex-column justify-between\">\n                <div class=\"title h5 mb-4 text-center fs-4 fw-bold\">" + this.name + "</div>\n                <div class=\"fs-6\"><span class=\"fw-bold\">Location:</span> " + this.zipAddress + " " + this.city + "</div>\n                <div class=\"fs-6\"><span class=\"fw-bold\">Address:</span> " + this.streetAddress + " " + this.numberAddress + this.number2Address + "</div>\n                <div class=\"fs-6\"><span class=\"fw-bold\">When:</span> " + this.day + " " + this.EventDate + " " + this.EventTime + "</div>\n                <div class=\"fs-6\"><span class=\"fw-bold\">\u20AC</span> " + this.price.toFixed(2) + "</div>\n                <div class=\"fs-6 text-secondary text-end mt-4 mt-md-auto mb-0\"><span class=\"fw-bold\">Created:</span> " + this.displayDate() + "</div>\n              </div>\n          </div>\n        </div>\n        ";
    };
    Events.prototype.displayDate = function () {
        var a = this.created;
        var n = a.toLocaleDateString();
        console.log(n);
        return n;
    };
    return Events;
}(Place));
new Restaurants('./img/4.jpg', 'Sixta', 'Restaurant', 'Vienna', '1050', 'Schönbrunner Straße', 21, '', new Date("2015-07-21"), 4315852856, 'www.sixta-restaurant.at', 'Chinese');
new Place('./img/2.jpg', 'Zoo Vienna', 'Location', 'Vienna', '1130', 'Maxingstraße', 13, 'b', new Date("2020-10-10"));
new Restaurants('./img/3.jpg', 'Lemon Leaf Thai Restaurant', 'Restaurant', 'Vienna', '1050', 'Kettenbrückengasse', 19, '', new Date("2015-03-25"), 4315812308, 'www.lemonleaf.at', 'Viennese');
new Events('./img/6.jpg', 'Lenny Kravitz', 'Event', 'Vienna', '1150', 'Wiener Stadthalle, Halle D, Roland Rainer Platz', 1, '', new Date("2016-03-25"), 'Saturday, ', '09.12.2029', '19:30', 47.80);
new Place('./img/1.jpg', 'St. Charles Church', 'Location', 'Vienna', '1010', 'Karlsplatz', 1, '', new Date("2019-10-25"));
new Events('./img/5.jpg', 'Kris Kristofferson', 'Event', 'Vienna', '1150', 'Wiener Stadthalle, Halle F, Roland Rainer Platz', 1, '', new Date("2017-03-20"), 'Friday, ', '21.04.2021', '20:00', 58.50);
function sortOrderASC() {
    myarray.sort(function compareNumbers(first, second) {
        return second.created - first.created;
    });
    document.getElementById('row').innerHTML = "";
    for (var i = 0; i < myarray.length; i++) {
        //console.table(myarray[i]);
        //document.write(myarray[i].showPrice());
        console.log(typeof (myarray[i].created));
        document.getElementById('row').innerHTML += "\n        " + myarray[i].display() + "\n    ";
    }
}
function sortOrderDESC() {
    myarray.sort(function compareNumbers(first, second) {
        return first.created - second.created;
    });
    document.getElementById('row').innerHTML = "";
    for (var i = 0; i < myarray.length; i++) {
        console.log(typeof (myarray[i].created));
        document.getElementById('row').innerHTML += "\n        " + myarray[i].display() + "\n    ";
    }
}
for (var i = 0; i < myarray.length; i++) {
    console.log(typeof (myarray[i].created));
    document.getElementById('row').innerHTML += "\n        " + myarray[i].display() + "\n    ";
}
var sort = document.getElementById("button1");
sort.addEventListener('click', sortOrderASC, false);
var sort = document.getElementById("button2");
sort.addEventListener('click', sortOrderDESC, false);
