function fn() {
  return 'Code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
  return 'Code here';
}

fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

const controlFnExec = fnParam => allwed => {
  if (allwed) {
    fnParam();
  }
}

function controlFnExec(fnParam) {
  return function (allwed) {
    if (allwed) {
      fnParam();
    }
  }
}