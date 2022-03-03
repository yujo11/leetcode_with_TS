function canMakeArithmeticProgression(arr: number[]): boolean {
  arr = arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length - 2; i++) {
    const next = arr[i + 1] - arr[i]
    const nextnext = arr[i + 2] - arr[i + 1]

    if (next !== nextnext) return false
  }

  return true
}
