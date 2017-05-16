'user stricts';

var math;

var firstAndPike = {
  name: '1st and Pike',
  MinCust: 23,
  MaxCust: 65,
  AvgCookieSale: 6.3,
  CustPerHr: function() {
    return math.floor((this.MaxCust - this.MinCust) * math.random() + 1);
  },

  CookiePerCust: function sumHrTotal() {
    var businessHR = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

    for (var i=0; i <= 15; i++) {
       return this.CustPerHr * this.AvgCookieSale;
    }
  },

  var container = document.createElement('div');
    container.innerHTML = '<p>' + '1st and Pike' + '</p>';

  var list = document.createElement('ul');
  var listArr = [];

//need make an array that shows opening hours and cookies sold
var businessHR = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

  for (var i=0; i <= 15; i++) {
      listArr.push('<li>' + sumHrTotal[i] + '</li>');
  }
  function openHR() {
    var container = document.createElement('div');
    container.innerHTML = '<p>' + '1st And Pike ' + '</p>';

    var list = document.createElement('ul');
    var listArr = [];

    for (var i=0; i < salmonShop.length; i++) {
      listArr.push('<li>' + salmonShop[i] + '</li>');
    }

    var full_list = listArr.join('');
    list.innerHTML = full_list;
    document.body.appendChild(list);
  }

  shop();
};



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

var salmonShop = ['First and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
function shop() {
  var container = document.createElement('div');
  container.innerHTML = '<p>' + 'List of stores: ' + '</p>';

  var list = document.createElement('ul');
  var listArr = [];

  for (var i=0; i < salmonShop.length; i++) {
    listArr.push('<li>' + salmonShop[i] + '</li>');
  }

  var full_list = listArr.join('');
  list.innerHTML = full_list;
  document.body.appendChild(list);
}

shop();
