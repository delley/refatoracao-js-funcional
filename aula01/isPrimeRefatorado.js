const NOT = ( i ) => !i

const isEvenAndIsNotTwo = ( num ) => ( ( num % 2 ) === 0 && num !== 2 )

const hasIntegerSquareRoot = ( num ) => ( Number.isInteger( Math.sqrt( num ) ) )

const hasDivisor = ( num ) => {
  for (var i = Math.ceil(num / 2); i >= 2; i--) {
    if(num % i === 0) {
      console.log('\n')
      console.log(num + ' é divisível por: ', i)
      return true
    }
  }
  return false;
}
const isPrime = (num) => NOT( isEvenAndIsNotTwo( num ) || hasIntegerSquareRoot( num ) || hasDivisor( num ) )

console.log('isPrime 2', isPrime(2))
console.log('isPrime 3', isPrime(3))
console.log('isPrime 4', isPrime(4))

console.log('isPrime 100002', isPrime(100002))
console.log('isPrime 100003', isPrime(100003))
console.log('isPrime 100007', isPrime(100007))
