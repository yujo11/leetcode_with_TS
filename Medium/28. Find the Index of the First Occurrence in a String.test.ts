export {}

/**
 * Solution 0
 */

//  function strStr(haystack: string, needle: string): number {
//     if (needle === '') return 0

//     for (let i = 0; i < haystack.length; i++) {
//       if (haystack[i] === needle[0]) {
//         let j = 1
//         while (j < needle.length && haystack[i + j] === needle[j]) j++

//         if (j === needle.length) return i
//       }
//     }

//     return -1
//   }

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

// function strStr(haystack: string, needle: string): number {
//   return haystack.includes(needle) ? haystack.indexOf(needle) : -1
// }

/**
 * Solution 6
 */

var strStr = function (haystack: string, needle: string): number {
  if (needle.length > haystack.length) {
    return -1
  }
  if (!needle) {
    return 0
  }
  var R = 256
  var Q = 999991
  var M = needle.length
  var RM = 1

  for (var a = 1; a <= M - 1; a++) {
    RM = (R * RM) % Q
  }
  var phash = hash(needle, M, Q, R)
  var hashy = hash(haystack, M, Q, R)
  if (phash === hashy) return 0

  for (var i = 1; i + M - 1 <= haystack.length - 1; i++) {
    var nextHash = (hashy + Q - ((haystack.charCodeAt(i - 1) * RM) % Q)) % Q
    nextHash = (((nextHash * R) % Q) + haystack.charCodeAt(i + M - 1)) % Q
    if (nextHash === phash) {
      return i
    }
    hashy = nextHash
  }
  return -1
}

var hash = function (str: string, len: number, Q: number, R: number) {
  var h = 0
  for (var i = 0; i < len; i++) {
    h = (h * R + str.charCodeAt(i)) % Q
  }
  return h
}

describe('strStr', () => {
  test('case 1', () => {
    expect(strStr('sadbutsad', 'sad')).toEqual(0)
  })

  test('case 2', () => {
    expect(strStr('leetcode', 'leeto')).toEqual(-1)
  })
})
