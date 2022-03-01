/*
 ** Solution 1
 */

function hammingWeight(n: number): number {
  return n
    .toString(2)
    .split("")
    .filter((x) => x === "1").length;
}

/*
 ** Solution 2
 */

function hammingWeight2(n: number): number {
  return n.toString(2).match(/1/g)?.length || 0;
}
