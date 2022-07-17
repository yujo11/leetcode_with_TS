class MinStack {
  stack: number[]

  constructor() {
    this.stack = []
  }

  push(val: number): void {
    this.stack.push(val)
  }

  pop(): void {
    this.stack.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return Math.min(...this.stack)
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

describe('MinStack', () => {
  test('case 1', () => {
    const minStack = new MinStack()

    minStack.push(-2)
    minStack.push(0)
    minStack.push(-3)
    expect(minStack.getMin()).toEqual(-3)

    minStack.pop()
    expect(minStack.top()).toEqual(0)
    expect(minStack.getMin()).toEqual(-2)
  })
})
