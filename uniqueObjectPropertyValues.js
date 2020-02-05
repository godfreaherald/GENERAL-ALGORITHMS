function getUnique1(arr) {
  let tempArr = arr.map(item => item.company);
  return [...new Set(tempArr)];
}

function getUnique2(arr) {
  return [
    ...arr.reduce((acc, item) => {
      acc.add(item);
      return acc;
    }, new Set())
  ];
}
