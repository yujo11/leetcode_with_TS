function countOdds(low: number, high: number): number {
  let count = 0;

  while (low <= high) {
    if (low % 2 === 1) count++;
    low++;
  }

  return count;
}
