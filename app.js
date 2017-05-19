
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


//this is where the event comes in play
var form = document.getElementById('sample_form');

function formData(event) {
  event.preventDefault();

  var name = event.target.name.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avgCookieSale = parseInt(event.target.avgCookieSale.value);
  //console.log(name, minCust, maxCust, avgCookieSale);
  var formShop = new Shop(name, minCust, maxCust, avgCookieSale);
  formShop.cookiePerCust();
  formShop.render();
  form.reset();
}

form.addEventListener('submit', formData);
