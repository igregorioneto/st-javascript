// Factory:
// não necessita chamar o new do objeto
function Pessoa(customProperties) {
  return {
    name: 'Gregório',
    lestName: 'Neto',
    ...customProperties
  }
}

const p = Pessoa({ name: 'Custom Name', age: 27 });
console.log(p);

// Singleton:
// Retorna sempre a mesma intância
function Pessoa2() {
  if (!Pessoa2.instance) {
    Pessoa2.instance = this;
  }
  return Pessoa2.instance;
}

const pe = Pessoa2.call({ name: 'João' });
const pe2 = Pessoa2.call({ name: 'Jéssica' });

console.log(pe);
console.log(pe2);

// Decorator:
// Recebe outra função como parâmetro
// E estende o seu comportamento sem modificá-la
let loggedIn = true;
function callIfAuthenticated(fn) {
  return !!loggedIn && fn();
}

function sum(a, b) {
  return a + b;
}

console.log(callIfAuthenticated(() => sum(2, 3)));

// Observer:
// A instância (subscriber) mantém uma coleção de objetos (Observers)
// E notifica quando ocorrem mudanças de estado.
class Observable {
  constructor() {
    this.observables = [];
  }

  subscribe(fn) {
    this.observables.push(fn);
  }

  notify(data) {
    this.observables.forEach(fn => fn(data));
  }

  unsubscribe(fn) {
    this.observables = this.observables.filter(obs => obs != fn);
  }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);

o.notify('notified 2');

// Module:
// Organização melhor do código, 
// Sem a necessidade de expor variáveis globais
let name = 'default';
function getName() {
  return name;
}

function setName(newName) {
  name = newName;
}

module.exports = {
  getName,
  setName
}
