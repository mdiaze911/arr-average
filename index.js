function calculateAverage(arr) {
    let summ = 0;
     for (let i = 0; i < arr.length; i += 1) {
    summ += arr[i];
  }
  return summ/arr.length
}
console.log(calculateAverage([1, 2, 3]))
