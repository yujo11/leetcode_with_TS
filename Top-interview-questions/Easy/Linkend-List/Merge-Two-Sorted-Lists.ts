export {}

class ListNode {
  val: number | null
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? null : val
    this.next = next === undefined ? null : next
  }
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 && !l2) return null

  if (!l1) return l2

  if (!l2) return l1

  let dummy = new ListNode(-1)
  let curr = dummy

  while (l1 && l2) {
    if (Number(l1.val) <= Number(l2.val)) {
      curr.next = new ListNode(Number(l1.val))
      l1 = l1.next
    } else {
      curr.next = new ListNode(Number(l2.val))
      l2 = l2.next
    }
    curr = curr.next
  }
  curr.next = l1 || l2

  return dummy.next
  // if (!list1 && !list2) return null

  // if (!list1) return list2

  // if (!list2) return list1

  // const dummy = new ListNode(0)
  // const head = dummy

  // while (list1 && list2) {
  //   // if (!list1.next) {
  //   //   list1.next
  //   // }

  //   if (!list1) {
  //     head.next = new ListNode(Number(list2.val))

  //     list2 = list2.next

  //     break
  //   }

  //   if (!list2) {
  //     head.next = new ListNode(Number(list1.val))

  //     list1 = list1.next

  //     break
  //   }

  //   if (Number(list1.val) <= Number(list2.val)) {
  //     head.next = new ListNode(Number(list1.val))

  //     list1 = list1.next
  //   } else {
  //     head.next = new ListNode(Number(list2.val))

  //     list2 = list2.next
  //   }

  //   head = head.next
  // return head.next
}
