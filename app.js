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
    for (var i=6; i < 12; i++) {
      return this.CustPerHr * this.AvgCookieSale;
    }
    for (var i=1; i <= 8; i++) {
      return this.CustPerHr * this.AvgCookieSale;
    }
  },
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
