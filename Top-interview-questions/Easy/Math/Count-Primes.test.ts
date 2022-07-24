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
  const isPrime = new Array(n).fill(true)

  isPrime[1] = false

  for (let i = 2; i * i < n; i++) {
    if (!isPrime[i]) {
      continue
    }

    for (let j = i * i; j < n; j += i) {
      isPrime[j] = false
    }
  }

  const result = isPrime.filter(Boolean).length

  return result === 0 ? 0 : result - 1
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

  test('edge case 1', () => {
    expect(countPrimes(3)).toEqual(1)
  })
})
