function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1 === s2) return true

  let words = new Array(26).fill(0)
  let diff = 0

  for (let i = 0; i < s1.length; i++) {
    words[s1[i].charCodeAt(0) - 97]++
    words[s2[i].charCodeAt(0) - 97]--
    if (s1[i] != s2[i]) diff++
  }

  if (diff > 2) return false

  for (let i = 0; i < 26; i++) {
    if (words[i] != 0) return false
  }
  return true
}
