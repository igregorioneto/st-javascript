'use strict';

function Person(initialName) {
  let name = initialName;

  Object.defineProperties(this, 'name', {
    get: function () {
      return name;
    },
    set: function (value) {
      name = value;
    }
  });
}

Person.walk = function () {
  console.log('walking...');
}


class Pessoa {
  #name = '';

  constructor(name) {
    this.#name = name;
  }

  static walk() {
    console.log('walking...');
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}