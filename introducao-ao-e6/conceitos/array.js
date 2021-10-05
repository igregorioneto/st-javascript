const users = ['João', 'Jessica', 'Amanda'];

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W')
}

const persons = [
  {
    name: 'João',
    age: 26,
    gender: gender.MAN
  },
  {
    name: 'Jessica',
    age: 25,
    gender: gender.WOMAN
  },
  {
    name: 'Amanda',
    age: 28,
    gender: gender.WOMAN
  }
];

console.log('Items:', persons);

const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);

const mens = persons.filter(person => person.gender === gender.MAN);

const personsWithCourse = persons.map(person => {
  person.course = 'Introdução ao Javascript';
  return person;
});

const totalEvenAges = persons
  .filter(person => person.age % 2 === 0)
  .reduce((age, person) => {
    age += person.age;
    return age;
  }, 0);
