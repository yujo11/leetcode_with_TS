function maxProfit(prices: number[]): number {
  let maxProfit = 0
  let minPrice = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i])
    maxProfit = Math.max(maxProfit, prices[i] - minPrice)
  }
  return maxProfit
}

describe('maxProfit', () => {
  it('case 1', () => {
    const prices = [7, 1, 5, 3, 6, 4]
    const result = maxProfit(prices)

    expect(result).toEqual(5)
  })

  it('case 2', () => {
    const prices = [7, 6, 4, 3, 1]
    const result = maxProfit(prices)

    expect(result).toEqual(0)
  })
})
