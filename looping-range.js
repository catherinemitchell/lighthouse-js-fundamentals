function range(start, end, step) {
  const loopingRange = [];
  if(start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return loopingRange;
  }
  else for (let i = start; i <= end; i += step) {
    loopingRange.push(i);
  }
  return loopingRange;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));