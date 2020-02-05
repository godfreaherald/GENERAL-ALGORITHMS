function getNthFabonacci(n) {
  if (n === 1) {
    return 0;
  } else if (n === 2) return 1;
  else {
    return getNthFabonacci(n - 1) + getNthFabonacci(n - 2);
  }
}

console.log(getNthFabonacci(10));
