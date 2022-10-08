export {}

/**
 * Solution 1
 */

// function strStr(haystack: string, needle: string): number {
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack.slice(i, i + needle.length) === needle) {
//       return i
//     }
//   }

//   return -1
// }

/**
 * Solution 2
 */

// function strStr(haystack: string, needle: string): number {
//   return haystack.indexOf(needle)
// }

/**
 * Solution 3
 */

// function strStr(haystack: string, needle: string): number {
//   return haystack.search(needle)
// }

/**
 * Solution 4
 */

// function strStr(haystack: string, needle: string): number {
//   return haystack.match(needle)?.index ?? -1
// }

/**
 * Solution 5
 */

function strStr(haystack: string, needle: string): number {
  return haystack.includes(needle) ? haystack.indexOf(needle) : -1
}

describe('strStr', () => {
  test('case 1', () => {
    expect(strStr('sadbutsad', 'sad')).toEqual(0)
  })

  test('case 2', () => {
    expect(strStr('leetcode', 'leeto')).toEqual(-1)
  })
})
