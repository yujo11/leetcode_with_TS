export {}

/**
 * My Solution
 */
function maxProfit(prices: number[]): number {
  let acc = 0
  let currentPrice = prices[0]

  for (let i = 1; i < prices.length; i++) {
    if (currentPrice < prices[i]) {
      acc += prices[i] - currentPrice
      currentPrice = prices[i]
    }

    if (currentPrice > prices[i]) {
      currentPrice = prices[i]
    }
  }

  return acc
}

describe('Best Time to Buy and Sell Stock 2', () => {
  test('case 1', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7)
  })

  test('case 2', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4)
  })
})
