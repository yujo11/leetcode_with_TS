export {}

class ListNode {
  val: number | null
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? null : val
    this.next = next === undefined ? null : next
  }
}

function isPalindrome(head: ListNode | null): boolean {
  const value: number[] = []

  while (head) {
    if (head.val === null) return false

    value.push(head.val)

    head = head.next
  }

  if (value.join('') === value.reverse().join('')) return true
  else return false
}

describe('isPalindrome', () => {
  test('case 1', () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))

    expect(isPalindrome(head)).toBe(true)
  })

  test('case 1', () => {
    const head = new ListNode(1, new ListNode(2))

    expect(isPalindrome(head)).toBe(false)
  })
})
