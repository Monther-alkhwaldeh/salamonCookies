'use strict';
const TotalofTotal=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

const openTime1=['location','6am', '7am', '8am', '9am', '10pm', '11pm', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];
const container=document.getElementById('shops');
const tabel1=document.createElement('table');
container.appendChild(tabel1);
const hRow1=document.createElement('tr');
tabel1.appendChild(hRow1);
for(let i=0; i<openTime1.length;i++){
  const headR=document.createElement('th');
  hRow1.appendChild(headR);
  headR.textContent=openTime1[i];
}

function Shopsbranch(name,min, max, avg, purshes,total,) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.purshes = purshes;
  this.total=total;
}

// function headerRow(){
//   const conatainer = document.getElementById('shops');
//   const articleE1 = document.createElement('article');
//   conatainer.appendChild(articleE1);
//   const tabelE1 = document.createElement('table');
//   articleE1.appendChild(tabelE1);
//   const hRowe1 = document.createElement('tr');
//   articleE1.appendChild(hRowe1);
//   const th1E2 = document.createElement('th');
//   hRowe1.appendChild(th1E2);
//   th1E2.textContent = 'branches';
//   for (let i = 0; i < openTime.length; i++) {
//     const th1E1=document.createElement('th');
//     hRowe1.appendChild(th1E1);
//     th1E1.textContent = openTime[i];
//   }
// }

Shopsbranch.prototype.getCustp = function () {
  for (let i = 0; i<openTime1.length; i++) {
    this.purshes[i] = Math.floor(hourlycustomers(this.min, this.max) * this.avg);
    this.total+= this.purshes[i];
  }
  this.purshes[14] = this.total;
};

Shopsbranch.prototype.render = function () {
  const hRowe2 = document.createElement('tr');
  tabel1.appendChild(hRowe2);
  const tde1 = document.createElement('td');
  hRowe2.appendChild(tde1);
  tde1.textContent = this.name;
  for (let i = 0; i <(this.purshes.length)-1; i++) {
    const tde2 = document.createElement('td');
    hRowe2.appendChild(tde2);
    tde2.textContent = this.purshes[i];
    TotalofTotal[i]+=this.purshes[i];
  }
};

// const hRowe3=document.createElement('tr');
// articleE1.appendChild(hRowe3);
// const tde3=document.createElement('td');
// hRowe3.appendChild(tde3);
// tde3.textContent='Total';

// const hRowe2=document.createElement('tr');
// articleE1.appendChild(hRowe2);
// const tde1=document.createElement('td');
// hRowe2.appendChild(tde1);
// tde1.textContent=this.name;
// for(let i=0;i<this.openTime.length;i++){
//   const tde2=document.createElement('td');
//   hRowe2.appendChild(tde2);
//   tde2.textContent=this.purshes[i];
// }
// tabelE1.appendChild(hRowe1);
// const dataRow=document.createElement('tr');
// tabelE1.appendChild(dataRow);
// const td1E1=document.createElement('td');
// dataRow.appendChild(td1E1);
// td1E1.textContent=`${this.purshes} ${this.sale}`;
// const container = document.getElementById('shops');
// console.log(container);
// const articleE1 = document.createElement('article');
// container.appendChild(articleE1);
// const h2e1 = document.createElement('h2');
// articleE1.appendChild(h2e1);
// h2e1.textContent = this.name;
// const ule1 = document.createElement('ul');
// articleE1.appendChild(ule1);
// for (let i = 0; i < this.openTime.length; i++) {
//   const lie1 = document.createElement('li');
//   ule1.appendChild(lie1);
//   lie1.textContent = `${this.openTime[i]} : ${this.purshes[i]} cookies`;

// -------------------------------------------------------------------


// ----------------------------------------------------------------
const seattle = new Shopsbranch(
  'Seattle',
  23,
  65,
  6.3,
  [],
  0
);
const tokyo = new Shopsbranch(
  'tokyo',
  3,
  24,
  1.2,
  [],
  0
);
const dubai = new Shopsbranch(
  'Dubai',
  11,
  38,
  3.7,
  [],
  0
);
const paris = new Shopsbranch(
  'Paris',
  20,
  38,
  2.3,
  [],
  0
);
const lima = new Shopsbranch(
  'Lima',
  2,
  16,
  4.6,
  [],
  0
);
// headerRow();
seattle.getCustp();
seattle.render();
tokyo.getCustp();
tokyo.render();
dubai.getCustp();
dubai.render();
paris.getCustp();
paris.render();
lima.getCustp();
lima.render();


function hourlycustomers(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const footRow=document.createElement('tr');
tabel1.appendChild(footRow);
const fth=document.createElement('th');
footRow.appendChild(fth);
fth.textContent='TotalofTotal';
for (let i = 0; i < TotalofTotal.length; i++) {
  const tdee= document.createElement('td');
  footRow.appendChild(tdee);
  tdee.textContent=TotalofTotal[i];
}