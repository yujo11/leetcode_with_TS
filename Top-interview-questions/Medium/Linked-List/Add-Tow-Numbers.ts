class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/**
 *
 * fail
 * Input:    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
 *           [5,6,4]
 * Output:   [0, 3, NaN, 1]
 * Expected: [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
 */

// function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//   const list1: number[] = []
//   const list2: number[] = []

//   while (l1) {
//     list1.push(l1.val)
//     l1 = l1.next
//   }

//   while (l2) {
//     list2.push(l2.val)
//     l2 = l2.next
//   }

//   const sumList = String(+list1.reverse().join('') + +list2.reverse().join(''))
//     .split('')
//     .reverse()

//   const sumListNode = new ListNode(+sumList[0])

//   let currentNode = sumListNode

//   for (let i = 1; i < sumList.length; i++) {
//     currentNode.next = new ListNode(+sumList[i])
//     currentNode = currentNode.next
//   }

//   return sumListNode
// }

/**
 *
 * Input:    [9,9,9,9,9,9,9]
 *           [9,9,9,9]
 * Expected: [8,9,9,9,0,0,0,1]
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let currentNode = new ListNode(0)
  let result = currentNode
  let carry = 0

  while (l1 || l2) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry

    carry = Math.floor(sum / 10)

    currentNode.next = new ListNode(sum % 10)
    currentNode = currentNode.next

    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }

  if (carry > 0) {
    currentNode.next = new ListNode(carry)
  }

  return result.next
}
