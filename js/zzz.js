'use strict';
//----------------------------------------------headerRow-------------------------------------------------//
const totOfTot = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function getRandomNo(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
const timeArr = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];
const divEl = document.getElementById('cookieStand');
const tableEl = document.createElement('table');
divEl.appendChild(tableEl);
const headRowEl = document.createElement('tr');
tableEl.appendChild(headRowEl);
for (let i = 0; i < timeArr.length; i++) {
  const headCellEl = document.createElement('th');
  headRowEl.appendChild(headCellEl);
  headCellEl.textContent = timeArr[i];
}
//-----------------------------------------constructorFunction--------------------------------------------//
function Fish(location, min, max, avgCookie, cookiePurArray, total) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  this.cookiePurArray = cookiePurArray;
  this.total = total;
  Fish.prototype.getCookiePerCust = function () {
    for (let i = 0; i < (timeArr.length - 1); i++) {
      this.cookiePurArray[i] = Math.floor(getRandomNo(this.min, this.max) * this.avgCookie);
      this.total += this.cookiePurArray[i];
    }
    this.cookiePurArray[14] = this.total;
  },
  //-----------------------------------------prototypeRender---------------------------------------------//
  Fish.prototype.render = function () {
    this.getCookiePerCust();
    const dataRowEl = document.createElement('tr');
    tableEl.appendChild(dataRowEl);
    const dataCellEl = document.createElement('td');
    dataRowEl.appendChild(dataCellEl);
    dataCellEl.textContent = this.location;
    for (let i = 0; i < this.cookiePurArray.length; i++) {
      const dataCellEl = document.createElement('td');
      dataRowEl.appendChild(dataCellEl);
      dataCellEl.textContent = this.cookiePurArray[i];
      totOfTot[i]+=this.cookiePurArray[i];
    }
  };
}
//--------------------------------------invokingConstructorFunction--------------------------------------//
const seattle = new Fish('Seattle',23,65,6.3,[],0);
const tokyo = new Fish('Tokyo',3,24,1.2,[],0);
const dubai = new Fish('Dubai',11,38,3.7,[],0);
const paris = new Fish('Paris',20,38,2.3,[],0);
const lima = new Fish('Lima',2,16,4.6,[],0);
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
//----------------------------------------------footerRow-----------------------------------------------//
const footRowEl = document.createElement('tr');
tableEl.appendChild(footRowEl);
const footCellEl = document.createElement('th');
footRowEl.appendChild(footCellEl);
footCellEl.textContent = 'Totals';
for (let i = 0; i < totOfTot.length; i++) {
  const footCellEl = document.createElement('th');
  footRowEl.appendChild(footCellEl);
  footCellEl.textContent = totOfTot[i];
}
