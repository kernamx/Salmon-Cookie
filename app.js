'use strict';

var location = ['First and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];


var firstAndPike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  cookiesEachHour: [],
  custPerHr: function() {
    return Math.floor((this.maxCust - this.minCust) * Math.random() + 1);
  },
//Calculate and store the amounts of avg cookies for each hour and random number of customers
//build an equation inside the for loop.  usiing for loop to run the equation through each hour.
  cookiePerCust: function() {
    for (var i=0; i <= 15; i++) {
      this.cookiesEachHour.push(this.custPerHr() * this.avgCookieSale);
    }
  },
};
firstAndPike.cookiePerCust();

//display the values of each array as unordered lists in the browser
//using for loop to loop each hour and show as list on dom
// function salmonShop(){
//   var container = document.createElement('div');
//   container.innerHTML = '<p>' + '1st and Pike' + '</p>';
//
//   var list = document.createElement('ol');
//   var listArr = [];
//
//   for (var i=0; i <= 15; i++) {
//     listArr.push('<li>' + firstAndPike.cookiePerCust[i] + '</li>');
//   }
//
//   var full_list = listArr.join('');
//   list.innerHTML = full_list;
//   document.body.appendChild(list);
// }

// function openHR() {
//   var container = document.createElement('div');
//     container.innerHTML = '<p>' + '1st and Pike' + '</p>';
//   var list = document.createElement('ul');
//   var listArr = [];
//
//     for (var i=0; i <= 15; i++) {
//         listArr.push('<li>' + cookiePerCust[i] +  '</li>');
//     }
//     var full_list = listArr.join('');
//     list.innerHTML = full_list;
//     document.body.appendChild(list);
//   }




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
