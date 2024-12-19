const outerFunction = function () {
  console.log('Main Data');
  const data = 'some Data';
  return function () {
    return data;
  };
};

const closure = outerFunction();
console.log(closure());
console.log(closure());
