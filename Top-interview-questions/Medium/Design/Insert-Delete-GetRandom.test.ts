class RandomizedSet {
  set: number[]

  constructor() {
    this.set = []
  }

  insert(val: number): boolean {
    if (this.set.includes(val)) {
      return false
    }

    this.set.push(val)

    return true
  }

  remove(val: number): boolean {
    if (!this.set.includes(val)) {
      return false
    }

    this.set = this.set.filter((v) => v !== val)

    return true
  }

  getRandom(): number {
    return this.set[Math.floor(Math.random() * this.set.length)]
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
