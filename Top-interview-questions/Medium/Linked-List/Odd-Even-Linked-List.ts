/**
 * Definition for singly-linked list.
 */

export {}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null
  }

  let odd = head
  let even = head.next
  let evenHead = even

  while (even && even.next) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }

  odd.next = evenHead

  return head
}
