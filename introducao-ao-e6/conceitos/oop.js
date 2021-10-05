'use strinct';

function Animal() {
  this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.__proto__ === Animal.prototype);

console.log(Animal.__proto__ === Function.prototype);