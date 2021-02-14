'use strict';

const Seattle = {
  name: 'Seattle',
  openTime: ['6am', '7am', '8am', '9am', '10pm', '11pm', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'],
  min: 23,
  max: 65,
  avg: 6.3,
  sale: 0,
  purshes: [],

  getavg: function () {

    for (let i = 0; i <= this.openTime.length; i++) {
      this.purshes[i] = Math.floor(hourlycustomers(this.min, this.max) * this.avg);
      this.sale += this.purshes[i];
    }
    this.purshes[14] = this.sale;
  },


  render: function () {
    const container = document.getElementById('seattle');
    console.log(container);
    const articleE1 = document.createElement('article');
    container.appendChild(articleE1);
    const h2e1 = document.createElement('h2');
    articleE1.appendChild(h2e1);
    h2e1.textContent = Seattle.name;
    const ule1 = document.createElement('ul');
    articleE1.appendChild(ule1);
    for (let i = 0; i < Seattle.openTime.length; i++) {
      const lie1 = document.createElement('li');
      ule1.appendChild(lie1);
      lie1.textContent = `${Seattle.openTime[i]} : ${Seattle.purshes[i]} cookies`;

    }

  },
};

const Tokyo = {
  name: 'Tokyo',
  openTime: ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', 'Total'],
  min: 3,
  max: 24,
  avg: 1.2,
  sale: 0,
  purshes: [],

  getavg: function () {

    for (let i = 0; i <= this.openTime.length; i++) {
      this.purshes[i] = Math.floor(hourlycustomers(this.min, this.max) * this.avg);
      this.sale += this.purshes[i];
    }
    this.purshes[14] = this.sale;
  },
  render: function () {
    const container = document.getElementById('tokyo');
    console.log(container);
    const articleE1 = document.createElement('article');
    container.appendChild(articleE1);
    const h2e1 = document.createElement('h2');
    articleE1.appendChild(h2e1);
    h2e1.textContent = Tokyo.name;
    const ule1 = document.createElement('ul');
    articleE1.appendChild(ule1);
    for (let i = 0; i < Tokyo.openTime.length; i++) {
      const lie1 = document.createElement('li');
      ule1.appendChild(lie1);
      lie1.textContent = `${Tokyo.openTime[i]} : ${Tokyo.purshes[i]} cookies`;

    }

  },
};
const Dubai = {
  name: 'Dubai',
  openTime: ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', 'Total'],
  min: 11,
  max: 38,
  avg: 3.7,
  sale: 0,
  purshes: [],

  getavg: function () {

    for (let i = 0; i <= this.openTime.length; i++) {
      this.purshes[i] = Math.floor(hourlycustomers(this.min, this.max) * this.avg);
      this.sale += this.purshes[i];
    }
    this.purshes[14] = this.sale;
  },
  render: function () {
    const container = document.getElementById('dubai');
    console.log(container);
    const articleE1 = document.createElement('article');
    container.appendChild(articleE1);
    const h2e1 = document.createElement('h2');
    articleE1.appendChild(h2e1);
    h2e1.textContent = Dubai.name;
    const ule1 = document.createElement('ul');
    articleE1.appendChild(ule1);
    for (let i = 0; i < Dubai.openTime.length; i++) {
      const lie1 = document.createElement('li');
      ule1.appendChild(lie1);
      lie1.textContent = `${Dubai.openTime[i]} : ${Dubai.purshes[i]} cookies`;

    }

  },
};

const Paris = {
  name: 'Paris',
  openTime: ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', 'Total'],
  min: 20,
  max: 38,
  avg: 2.3,
  sale: 0,
  purshes: [],

  getavg: function () {

    for (let i = 0; i <= this.openTime.length; i++) {
      this.purshes[i] = Math.floor(hourlycustomers(this.min, this.max) * this.avg);
      this.sale += this.purshes[i];
    }
    this.purshes[14] = this.sale;
  },
  render: function () {
    const container = document.getElementById('paris');
    console.log(container);
    const articleE1 = document.createElement('article');
    container.appendChild(articleE1);
    const h2e1 = document.createElement('h2');
    articleE1.appendChild(h2e1);
    h2e1.textContent = Paris.name;
    const ule1 = document.createElement('ul');
    articleE1.appendChild(ule1);
    for (let i = 0; i < Paris.openTime.length; i++) {
      const lie1 = document.createElement('li');
      ule1.appendChild(lie1);
      lie1.textContent = `${Paris.openTime[i]} : ${Paris.purshes[i]} cookies`;

    }

  },
};

const Lima = {
  name: 'Lima',
  openTime: ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', 'Total'],
  min: 2,
  max: 16,
  avg: 4.6,
  sale: 0,
  purshes: [],

  getavg: function () {

    for (let i = 0; i <= this.openTime.length; i++) {
      this.purshes[i] = Math.floor(hourlycustomers(this.min, this.max) * this.avg);
      this.sale += this.purshes[i];
    }
    this.purshes[14] = this.sale;
  },
  render: function () {
    const container = document.getElementById('lima');
    console.log(container);
    const articleE1 = document.createElement('article');
    container.appendChild(articleE1);
    const h2e1 = document.createElement('h2');
    articleE1.appendChild(h2e1);
    h2e1.textContent = Lima.name;
    const ule1 = document.createElement('ul');
    articleE1.appendChild(ule1);
    for (let i = 0; i < Paris.openTime.length; i++) {
      const lie1 = document.createElement('li');
      ule1.appendChild(lie1);
      lie1.textContent = `${Lima.openTime[i]} : ${Lima.purshes[i]} cookies`;

    }
  },
};



function hourlycustomers(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
Seattle.getavg();
Seattle.render();
Tokyo.getavg();
Tokyo.render();
Dubai.getavg();
Dubai.render();
Paris.getavg();
Paris.render();
Lima.getavg();
Lima.render();



