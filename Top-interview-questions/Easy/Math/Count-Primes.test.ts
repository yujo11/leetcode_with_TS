/**
 *
 *  Time Limit Exceeded
 */

const isPrimeTimeLimitExceed = (n: number): boolean => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }

  return true
}

function countPrimesTimeLimitExceed(n: number): number {
  let count = 0

  for (let i = 2; i <= n; i++) {
    if (isPrimeTimeLimitExceed(i)) count++
  }

  return count
}

/**
 *
 * Success
 */

function countPrimes(n: number): number {
  if (n < 2) return 0

  const primeArray = [true, true]

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (!primeArray[i]) {
      for (let j = 2; j * i < n; j++) {
        primeArray[i * j] = true
      }
    }
  }

  let count = 0
  for (let i = 2; i < primeArray.length; i++) {
    if (!primeArray[i]) count++
  }

  return count
}

describe('countPrimes', () => {
  test('case 1', () => {
    expect(countPrimes(10)).toEqual(4)
  })

  test('case 2', () => {
    expect(countPrimes(0)).toEqual(0)
  })

  test('case 3', () => {
    expect(countPrimes(1)).toEqual(0)
  })
})
