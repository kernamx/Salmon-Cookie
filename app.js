'use strict';


var firstAndPike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  cookiesEachHour: [],
  total: 0,
  time: ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  custPerHr: function() {
    return Math.floor((this.maxCust - this.minCust) * Math.random() + 1);
  },
//Calculate and store the amounts of avg cookies for each hour and random number of customers
//build an equation inside the for loop.  usiing for loop to run the equation through each hour.
//in the for loop there is also Calculate the total when the loop runs each time
  cookiePerCust: function() {
    for (var i=0; i < 15; i++) {
      this.cookiesEachHour.push(Math.floor(this.custPerHr() * this.avgCookieSale));
      var sumCookies = Math.floor(this.custPerHr() * this.avgCookieSale);
      this.total = this.total + sumCookies;
      //console.log('total: ', this.total);
    }
    this.total;
    //console.log('total: ', this.total);
  }
};
firstAndPike.cookiePerCust();

//display the values of each array as unordered lists in the browser
//using for loop to loop each hour and show as list on dom
function salmonShop() {
  var container = document.createElement('div');
  container.innerHTML = '<p>' + firstAndPike.name + '</p>';
  document.body.appendChild(container);

  var list = document.createElement('ul');
  var list_Arr = [];

  for (var i=0; i < 15; i++) {
    list_Arr.push('<li>' + firstAndPike.time[i] + ': ' + firstAndPike.cookiesEachHour[i] + ' cookies' + '</li>');
  }

  var full_list = list_Arr.join('');

  list.innerHTML = full_list;
  document.body.appendChild(list);
}
salmonShop();


//constructor Method

function shop(name, custPerHr, cookiePerCust, total) {
  this.name = name;
  this.custPerHr = custPerHr;
  this.cookiePerCust = cookiePerCust;
  this.total = total;
}
//stop here take a break
var firstAndPike = new salmonShop('firstAndPike')

var table = document.getElementById('shell');
var data = [];

//use for loop

var new_row;

for (var j=0; j < data.length; j++) {
  new_row = document.createElement('tr');
  new_row.innerHTML = data[j];
  table.appendChild(new_row);
}


// var seaTacAirport = {
//   MinCust: 3,
//   MaxCust: 24,
//   AvgCookieSale: 1.2,
//   CustPerHr: function() {
//     return math.floor((this.MaxCust - this.MinCust) * math.random() + 1);
//   },
//   CookiePerCust: function() {
//     return this.CustPerHr * this.AvgCookieSale;
//   }
// };
//
// var seattleCenter = {
//   MinCust: 11,
//   MaxCust: 38,
//   AvgCookieSale: 3.7,
//   CustPerHr: function() {
//     return math.floor((this.MaxCust - this.MinCust) * math.random() + 1);
//   },
//   CookiePerCust: function() {
//     return this.CustPerHr * this.AvgCookieSale;
//   }
// };
//
// var capitolHill = {
//   MinCust: 20,
//   MaxCust: 38,
//   AvgCookieSale: 2.3,
//   CustPerHr: function() {
//     return math.floor((this.MaxCust - this.MinCust) * math.random() + 1);
//   },
//   CookiePerCust: function() {
//     return this.CustPerHr * this.AvgCookieSale;
//   }
// };
//
// var alki = {
//   MinCust: 2,
//   MaxCust: 16,
//   AvgCookieSale: 4.6,
//   CustPerHr: function() {
//     return math.floor((this.MaxCust - this.MinCust) * math.random() + 1);
//   },
//   CookiePerCust: function() {
//     return this.CustPerHr * this.AvgCookieSale;
//   }
// };


// function shop() {
//   var container = document.createElement('div');
//   container.innerHTML = '<p>' + 'List of stores: ' + '</p>';
//
//   var list = document.createElement('ul');
//   var listArr = [];
//
//   for (var i=0; i < salmonShop.length; i++) {
//     listArr.push('<li>' + salmonShop[i] + '</li>');
//   }
//
//   var full_list = listArr.join('');
//   list.innerHTML = full_list;
//   document.body.appendChild(list);
// }
