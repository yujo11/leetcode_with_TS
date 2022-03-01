function middleNode(head: ListNode | null): ListNode | null {
  let [slow, fast] = [head, head]

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}
