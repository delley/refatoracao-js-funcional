function isPrime(num) {
  // se for par E não for 2
  if ((num % 2) === 0 && num !== 2) {
    return false;
  }

  for (var i = num -1; i > 1; i--) {
    if(num % i === 0) {
      console.log('\n');
      console.log(num + ' é divisível por: ', i);
      return false;
    }
  }
  return true;
}

console.log('isPrime 2', isPrime(2));
console.log('isPrime 3', isPrime(3));
console.log('isPrime 4', isPrime(4));

console.log('isPrime 100002', isPrime(100002));
console.log('isPrime 100003', isPrime(100003));
console.log('isPrime 100007', isPrime(100007));
