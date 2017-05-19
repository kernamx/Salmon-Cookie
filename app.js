
  'use strict';

  var table = document.getElementById('shell');


  function Shop(name, minCust, maxCust, avgCookieSale) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;
    this.cookiesEachHour = ['<td>' + name + '</td>'];
    this.cleanSales = [];
  }

  Shop.prototype.custPerHr = function(){
    return Math.floor((this.maxCust - this.minCust) * Math.random() + 1);
  };

  Shop.prototype.cookiePerCust = function() {
    var total = 0;
    for (var i=0; i < 15; i++) {
      var sumCookies = Math.floor(this.custPerHr() * this.avgCookieSale);
      this.cookiesEachHour.push('<td>' + sumCookies + '</td>');
      this.cleanSales.push(Math.ceil(sumCookies));
      total += Math.ceil(sumCookies);
    }
    this.cookiesEachHour.push('<td>' + total + '</td>');
    this.cleanSales.push(total);
  };

  Shop.prototype.render = function() {
    var row = document.createElement('tr');
    row.innerHTML = this.cookiesEachHour.join('');
    table.appendChild(row);
  };

  var firstAndPike = new Shop('1stAndPike', 23, 65, 6.3);
  var seaTacAirport = new Shop('SeaTacAirport', 3, 24, 1.2);
  var seattleCenter = new Shop('SeattleCenter', 11, 38, 3.7);
  var capitolHill = new Shop('CapitolHill', 20, 38, 2.3);
  var alki = new Shop('Alki', 2, 16, 4.6);

  var placeShop = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

  function getSalesRender() {
    for (var k=0; k < 5; k++) {
      placeShop[k].cookiePerCust();
      placeShop[k].render();
    }
  }
  getSalesRender();



    //function that constructs tablerow to display store hours
    // function buildHeader() {
    //   //referencing thead element using it's ID and assigning it as the variable of header
    //   var header = [];
    //   var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
    //
    //   for (var i=0; i < hours.length; i++) {
    //     header.push('<td>' + hours[i] + '</td>');
    //   }
    //
    //   var fullRow = header.join('');
    //   console.log('header: ', header);
    //   header = document.createElement('thead');
    //   header.innerHTML = fullRow;
    //   document.body.appendChild(header);
    // }
    //
    // buildHeader();
    //
    // Shop.prototype.getTotal = function() {
    //   return this.cookiePerCust();
    // };
    //
    // Shop.prototype.listSales = function() {
    //   var listArr = [];
    //   var cookieArr = [];
    //
    //   listArr.push('<td>' + this.name + '</td>');
    //
    //   for (var i=0; i < 15; i++) {
    //     listArr.push('<td>' + this.cookiePerCust() + '</td>');
    //     cookieArr.push(this.cookiePerCust());
    //   }
    // };




  //   var table = document.getElementById('shell');
  //   var data = [];
  //
  //   for (var i=0; i < placeShop.length; i++) {
  //     data.push(
  //       '<td>' + placeShop[i].name + '</td>' +
  //       '<td>' + placeShop[i].minCust + '</td>' +
  //       '<td>' + placeShop[i].maxCust + '</td>' +
  //       '<td>' + placeShop[i].avgCookieSale + '</td>' +
  //       '<td>' + placeShop[i].cookiesEachHour() + '</td>' +
  //       '<td>' + placeShop[i].getTotal() + '</td>'
  //     );
  //   }
  // }
  //
  // var new_row;
  //
  // for (var j=0; j < data.length; j++) {
  //   new_row = document.createElement('tr');
  //   new_row.innerHTML = data[j];
  //   table.appendChild(new_row);

  // var firstAndPike = {
  //   name: '1st and Pike',
  //   minCust: 23,
  //   maxCust: 65,
  //   avgCookieSale: 6.3,
  //   cookiesEachHour: [],
  //   total: 0,
  //   time: ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  //   custPerHr: function() {
  //     return Math.floor((this.maxCust - this.minCust) * Math.random() + 1);
  //   },
  // //Calculate and store the amounts of avg cookies for each hour and random number of customers
  // //build an equation inside the for loop.  usiing for loop to run the equation through each hour.
  // //in the for loop there is also Calculate the total when the loop runs each time
  //   cookiePerCust: function() {
  //     for (var i=0; i < 15; i++) {
  //       this.cookiesEachHour.push(Math.floor(this.custPerHr() * this.avgCookieSale));
  //       var sumCookies = Math.floor(this.custPerHr() * this.avgCookieSale);
  //       this.total = this.total + sumCookies;
  //       //console.log('total: ', this.total);
  //     }
  //     this.total;
  //     //console.log('total: ', this.total);
  //   }
  // };
  // firstAndPike.cookiePerCust();
  //
  // //display the values of each array as unordered lists in the browser
  // //using for loop to loop each hour and show as list on dom
  // function salmonShop() {
  //   var container = document.createElement('div');
  //   container.innerHTML = '<p>' + firstAndPike.name + '</p>';
  //   document.body.appendChild(container);
  //
  //   var list = document.createElement('ul');
  //   var list_Arr = [];
  //
  //   for (var i=0; i < 15; i++) {
  //     list_Arr.push('<li>' + firstAndPike.time[i] + ': ' + firstAndPike.cookiesEachHour[i] + ' cookies' + '</li>');
  //   }
  //
  //   var full_list = list_Arr.join('');
  //
  //   list.innerHTML = full_list;
  //   document.body.appendChild(list);
  // }
  // salmonShop();






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
