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
//   return haystack.includes(needle) ? haystack.indexOf(needle) : -1
// }

/**
 * Solution 3
 */

// function strStr(haystack: string, needle: string): number {
//   return haystack.indexOf(needle)
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
//   return haystack.search(needle)
// }

/**
 * Solution 6
 */

// function strStr(haystack: string, needle: string): number {
//   if (needle.length > haystack.length) {
//     return -1
//   }

//   if (!needle) {
//     return 0
//   }

//   let R = 256
//   let Q = 999991
//   let M = needle.length
//   let RM = 1

//   for (let a = 1; a <= M - 1; a++) {
//     RM = (R * RM) % Q
//   }

//   let phash = hash(needle, M, Q, R)
//   let hashy = hash(haystack, M, Q, R)
//   if (phash === hashy) return 0

//   for (let i = 1; i + M - 1 <= haystack.length - 1; i++) {
//     let nextHash = (hashy + Q - ((haystack.charCodeAt(i - 1) * RM) % Q)) % Q
//     nextHash = (((nextHash * R) % Q) + haystack.charCodeAt(i + M - 1)) % Q
//     if (nextHash === phash) {
//       return i
//     }
//     hashy = nextHash
//   }
//   return -1
// }

// let hash = function (str: string, len: number, Q: number, R: number) {
//   let h = 0
//   for (let i = 0; i < len; i++) {
//     h = (h * R + str.charCodeAt(i)) % Q
//   }
//   return h
// }

function strStr(haystack: string, needle: string) {
  if (needle === '') return 0

  // define lps array
  const lps = new Array(needle.length).fill(0)
  let prevLPS = 0
  let i = 1
  while (i < needle.length) {
    if (needle[i] === needle[prevLPS]) {
      lps[i] = prevLPS + 1
      prevLPS += 1
      i += 1
    } else if (prevLPS === 0) {
      lps[i] = 0
      i += 1
    } else {
      prevLPS = lps[prevLPS - 1] // // cire KMP
    }
  }

  // use lps to get res
  i = 0 // ptr for haystack
  let j = 0 // ptr for needle
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++
      j++
    } else {
      if (j === 0) {
        i++
      } else {
        j = lps[j - 1] // cire KMP
      }
    }
    if (j === needle.length) return i - needle.length
  }
  return -1
}

describe('strStr', () => {
  test('case 1', () => {
    expect(strStr('sadbutsad', 'sad')).toEqual(0)
  })

  test('case 2', () => {
    expect(strStr('leetcode', 'leeto')).toEqual(-1)
  })
})
