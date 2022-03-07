function mergeAlternately(word1: string, word2: string): string {
  const result = []

  while (word1.length || word2.length) {
    if (word1.length) {
      result.push(word1[0])
      word1 = word1.slice(1)
    }

    if (word2.length) {
      result.push(word2[0])
      word2 = word2.slice(1)
    }
  }

  return result.join('')
}
