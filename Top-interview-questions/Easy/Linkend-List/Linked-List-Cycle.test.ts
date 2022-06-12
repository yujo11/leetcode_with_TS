export {}

class ListNode {
  val: number | null
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? null : val
    this.next = next === undefined ? null : next
  }
}

function hasCycle(head: ListNode | null): boolean {
  while (head) {
    if (head.val === null) {
      return true
    }

    head.val = null
    head = head.next
  }

  return false
}

describe('hasCycle', () => {
  test('case 1', () => {
    const head0 = new ListNode(3)
    const head1 = new ListNode(2)
    const head2 = new ListNode(0)
    const head3 = new ListNode(-4)

    head0.next = head1
    head1.next = head2
    head2.next = head3
    head3.next = head1

    expect(hasCycle(head0)).toBe(true)
  })

  test('case 2', () => {
    const head0 = new ListNode(1)
    const head1 = new ListNode(2)

    head0.next = head1
    head1.next = head0

    expect(hasCycle(head0)).toBe(true)
  })

  test('case 3', () => {
    const head0 = new ListNode(1)

    expect(hasCycle(head0)).toBe(false)
  })

  test('edge case 1', () => {
    const head0 = new ListNode(1)
    const head1 = new ListNode(2)

    head0.next = head1

    expect(hasCycle(head0)).toBe(false)
  })
})
