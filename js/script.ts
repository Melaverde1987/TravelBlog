var myarray: Array<Place> = [];

interface PlaceData {
    image: string;
    name: string;
    type: string;
    city: string;
    zipAddress: number;
    streetAddress: string;
    numberAddress: number;
    number2Address: string;
    created: Date;
    display?: Function;
}

class Place implements PlaceData {
    image;
    name;
    type;
    city;
    zipAddress;
    streetAddress;
    numberAddress;
    number2Address;
    created;

    constructor(image, name, type, city, zipAddress, streetAddress, numberAddress, number2Address, created) {
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

    display() {
        return `
        <div class="col col-12 col-md-6 col-lg-4 mb-4">
          <div class="box">
              <div class="my-2 fs-5 my_badge"><span class='px-3 py-2 badge bg-my'>${this.type}</span></div>
              <div class="image d-none d-md-block">
                  <img src="${this.image}" alt="">
              </div>
              <div class="text p-4 d-flex flex-column justify-content-between">
                <div class="title h5 mb-4 text-center fs-4 fw-bold">${this.name}</div>
                <div class="fs-6"><span class="fw-bold">Location:</span> ${this.zipAddress} ${this.city}</div>
                <div class="fs-6"><span class="fw-bold">Address:</span> ${this.streetAddress} ${this.numberAddress}${this.number2Address}</div>
                <div class="fs-6 text-secondary text-end mt-4 mt-md-auto mb-0"><span class="fw-bold">Created:</span> ${this.displayDate()}</div>
              </div>
          </div>
        </div>
        `;
    }

    displayDate() {
        var stringDate = this.created.toLocaleDateString();
        console.log(stringDate);
        return stringDate;
    }
    
}

class Restaurants extends Place {
    phoneNumber: number;
    website: string;
    typeOfCuisine: string;
    constructor(image, name, type, city, zipAddress, streetAddress, numberAddress, number2Address, created, phoneNumber, website, typeOfCuisine) {
        super(image, name, type, city, zipAddress, streetAddress, numberAddress, number2Address, created);
        this.phoneNumber = phoneNumber;
        this.website = website;
        this.typeOfCuisine = typeOfCuisine;
    }

    display() {
        return `
        <div class="col col-12 col-md-6 col-lg-4 mb-4">
          <div class="box">
              <div class="my-2 fs-5 my_badge"><span class='px-3 py-2 badge bg-my'>${this.type}</span></div>
              <div class="image d-none d-md-block">
                  <img src="${this.image}" alt="">
              </div>
              <div class="text p-4 d-flex flex-column justify-between">
                <div class="title h5 mb-4 text-center fs-4 fw-bold">${this.name}</div>
                <div class="fs-6"><span class="fw-bold">Type of cuisine:</span> ${this.typeOfCuisine}</div>
                <div class="fs-6"><span class="fw-bold">Location:</span> ${this.zipAddress} ${this.city}</div>
                <div class="fs-6"><span class="fw-bold">Address: </span> ${this.streetAddress} ${this.numberAddress}${this.number2Address}</div>
                <div class="fs-6"><span class="fw-bold">Phone:</span> +${this.phoneNumber}</div>
                <div class="fs-6"><span class="fw-bold">Website:</span> ${this.website}</div>
                <div class="fs-6 text-secondary text-end mt-4 mt-md-auto mb-0"><span class="fw-bold">Created:</span> ${this.displayDate()}</div>
              </div>
          </div>
        </div>
        `;
    }

    displayDate() {
        var a = this.created;
        var n = a.toLocaleDateString();
        console.log(n);
        return n;
    }
}


class Events extends Place {
    day: string;
    EventDate: any;
    EventTime : any;
    price: number;
    constructor(image, name, type, city, zipAddress, streetAddress, numberAddress, number2Address, created, day, EventDate, EventTime , price) {
        super(image, name, type, city, zipAddress, streetAddress, numberAddress, number2Address, created);
        this.day = day;
        this.EventDate = EventDate;
        this.EventTime = EventTime ;
        this.price = price;
    }

    display() {
        return `
        <div class="col col-12 col-md-6 col-lg-4 mb-4">
          <div class="box">
              <div class="my-2 fs-5 my_badge"><span class='px-3 py-2 badge bg-my'>${this.type}</span></div>
              <div class="image d-none d-md-block">
                  <img src="${this.image}" alt="">
              </div>
              <div class="text p-4 d-flex flex-column justify-between">
                <div class="title h5 mb-4 text-center fs-4 fw-bold">${this.name}</div>
                <div class="fs-6"><span class="fw-bold">Location:</span> ${this.zipAddress} ${this.city}</div>
                <div class="fs-6"><span class="fw-bold">Address:</span> ${this.streetAddress} ${this.numberAddress}${this.number2Address}</div>
                <div class="fs-6"><span class="fw-bold">When:</span> ${this.day} ${this.EventDate} ${this.EventTime }</div>
                <div class="fs-6"><span class="fw-bold">€</span> ${this.price.toFixed(2)}</div>
                <div class="fs-6 text-secondary text-end mt-4 mt-md-auto mb-0"><span class="fw-bold">Created:</span> ${this.displayDate()}</div>
              </div>
          </div>
        </div>
        `;
    }

    displayDate() {
        var a = this.created;
        var n = a.toLocaleDateString();
        console.log(n);
        return n;
    }
}




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

    document.getElementById('row').innerHTML = ``;

    for (let i = 0; i < myarray.length; i++) {
        //console.table(myarray[i]);
        //document.write(myarray[i].showPrice());
        console.log(typeof (myarray[i].created));
        document.getElementById('row').innerHTML += `
        ${myarray[i].display()}
    `;
    }

}

function sortOrderDESC() {
    myarray.sort(function compareNumbers(first, second) {
        return first.created - second.created;
    });

    document.getElementById('row').innerHTML = ``;

    for (let i = 0; i < myarray.length; i++) {
        console.log(typeof (myarray[i].created));
        document.getElementById('row').innerHTML += `
        ${myarray[i].display()}
    `;
    }

}

for (let i = 0; i < myarray.length; i++) {
    console.log(typeof(myarray[i].created));
    document.getElementById('row').innerHTML += `
        ${myarray[i].display()}
    `;
}

var sort = document.getElementById("button1");
sort.addEventListener('click', sortOrderASC, false);

var sort = document.getElementById("button2");
sort.addEventListener('click', sortOrderDESC, false);
