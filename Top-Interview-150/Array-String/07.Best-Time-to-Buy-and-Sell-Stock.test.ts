/**
 * My Solution
 */

function maxProfit(prices: number[]): number {
  let maxProfit = 0
  let minPrice = prices[0]

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price
      continue
    }

    if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice
    }
  }

  return maxProfit
}

describe('Best Time to Buy and Sell Stock', () => {
  test('case 1', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
  })

  test('case 2', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
  })
})
