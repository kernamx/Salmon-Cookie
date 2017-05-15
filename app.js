
// var salmonShop = {
//   Location: ['First and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'],
//   MinCust: [23, 3, 11, 20, 2],
//   MaxCust: [65, 24, 38, 38, 16],
//   AvgCookieSale: [6.3, 1.2, 3.7, 2.3, 4.6]
// };

var firstAndPike = {
  MinCust: 23,
  MaxCust: 65,
  AvgCookieSale: 6.3,
  CustPerHr: function() {
    return math.floor((this.MaxCust - this.MinCust) * math.random() + 1);
  },
  CookiePerCust: function() {
    return this.CustPerHr * this.AvgCookieSale;
  }
};

var seaTacAirport = {
  MinCust: 3,
  MaxCust: 24,
  AvgCookieSale: 1.2,
  CustPerHr: function() {
    return math.floor((this.MaxCust - this.MinCust) * math.random() + 1);
  },
  CookiePerCust: function() {
    return this.CustPerHr * this.AvgCookieSale;
  }
};

var seattleCenter = {
  MinCust: 11,
  MaxCust: 38,
  AvgCookieSale: 3.7,
  CustPerHr: function() {
    return math.floor((this.MaxCust - this.MinCust) * math.random() + 1);
  },
  CookiePerCust: function() {
    return this.CustPerHr * this.AvgCookieSale;
  }
};

var capitolHill = {
  MinCust: 20,
  MaxCust: 38,
  AvgCookieSale: 2.3,
  CustPerHr: function() {
    return math.floor((this.MaxCust - this.MinCust) * math.random() + 1);
  },
  CookiePerCust: function() {
    return this.CustPerHr * this.AvgCookieSale;
  }
};

var alki = {
  MinCust: 2,
  MaxCust: 16,
  AvgCookieSale: 4.6,
  CustPerHr: function() {
    return math.floor((this.MaxCust - this.MinCust) * math.random() + 1);
  },
  CookiePerCust: function() {
    return this.CustPerHr * this.AvgCookieSale;
  }
};

var salmonShop = ['First and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
function shop() = {
  var list = document.createElement('ul');
  var listArr = [];

  for (var i=0; i < salmonShop.length; i++) {
    list.innerHTML = full_list;
    document.body.appendChild(list);
  }
}

shop();
