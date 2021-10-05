const array = [0, 1, 2, 3, 4, 5];

array.forEach(item => {
  if (item % 2 === 0) {
    console.log(`O número ${item} é par.`);
  } else {
    console.log(`O número ${item} é ímpar.`);
  }
});

const fruit = 'pera';

switch (fruit) {
  case 'banana':
    console.log('R$ 3,00 / kg');
    break;
  case 'mamão':
  case 'pera':
    console.log('R$ 2,00 / kg');
    break;
  default:
    console.log('Produto não existe no estoque');
    break;
}