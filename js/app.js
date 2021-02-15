'use strict';

const seattle = {
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
    const container = document.getElementById('shops');
    console.log(container);
    const articleE1 = document.createElement('article');
    container.appendChild(articleE1);
    const h2e1 = document.createElement('h2');
    articleE1.appendChild(h2e1);
    h2e1.textContent = seattle.name;
    const ule1 = document.createElement('ul');
    articleE1.appendChild(ule1);
    for (let i = 0; i < seattle.openTime.length; i++) {
      const lie1 = document.createElement('li');
      ule1.appendChild(lie1);
      lie1.textContent = `${seattle.openTime[i]} : ${seattle.purshes[i]} cookies`;

    }

  },
};

const tokyo = {
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
    const container = document.getElementById('shops');
    console.log(container);
    const articleE1 = document.createElement('article');
    container.appendChild(articleE1);
    const h2e1 = document.createElement('h2');
    articleE1.appendChild(h2e1);
    h2e1.textContent = tokyo.name;
    const ule1 = document.createElement('ul');
    articleE1.appendChild(ule1);
    for (let i = 0; i < tokyo.openTime.length; i++) {
      const lie1 = document.createElement('li');
      ule1.appendChild(lie1);
      lie1.textContent = `${tokyo.openTime[i]} : ${tokyo.purshes[i]} cookies`;

    }

  },
};
const dubai = {
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
    const container = document.getElementById('shops');
    console.log(container);
    const articleE1 = document.createElement('article');
    container.appendChild(articleE1);
    const h2e1 = document.createElement('h2');
    articleE1.appendChild(h2e1);
    h2e1.textContent = dubai.name;
    const ule1 = document.createElement('ul');
    articleE1.appendChild(ule1);
    for (let i = 0; i < dubai.openTime.length; i++) {
      const lie1 = document.createElement('li');
      ule1.appendChild(lie1);
      lie1.textContent = `${dubai.openTime[i]} : ${dubai.purshes[i]} cookies`;

    }

  },
};

const paris = {
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
    const container = document.getElementById('shops');
    console.log(container);
    const articleE1 = document.createElement('article');
    container.appendChild(articleE1);
    const h2e1 = document.createElement('h2');
    articleE1.appendChild(h2e1);
    h2e1.textContent = paris.name;
    const ule1 = document.createElement('ul');
    articleE1.appendChild(ule1);
    for (let i = 0; i < paris.openTime.length; i++) {
      const lie1 = document.createElement('li');
      ule1.appendChild(lie1);
      lie1.textContent = `${paris.openTime[i]} : ${paris.purshes[i]} cookies`;

    }

  },
};

const lima = {
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
    const container = document.getElementById('shops');
    console.log(container);
    const articleE1 = document.createElement('article');
    container.appendChild(articleE1);
    const h2e1 = document.createElement('h2');
    articleE1.appendChild(h2e1);
    h2e1.textContent = lima.name;
    const ule1 = document.createElement('ul');
    articleE1.appendChild(ule1);
    for (let i = 0; i < lima.openTime.length; i++) {
      const lie1 = document.createElement('li');
      ule1.appendChild(lie1);
      lie1.textContent = `${lima.openTime[i]} : ${lima.purshes[i]} cookies`;

    }
  },
};



function hourlycustomers(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
seattle.getavg();
seattle.render();
tokyo.getavg();
tokyo.render();
dubai.getavg();
dubai.render();
paris.getavg();
paris.render();
lima.getavg();
lima.render();



