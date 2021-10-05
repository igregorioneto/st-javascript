class Person {
  constructor(name) {
    this.name = name;
  }
}

class PessoaF extends Person {
  constructor(name, cpf) {
    super(name);
    this.cpf = cpf;
  }
}