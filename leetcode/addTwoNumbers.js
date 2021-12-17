/*** 2. ADD TWO NUMBERS ***/
/*** *** *** *** *** *** *** *** *** *** *** ***
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *** *** *** *** *** *** *** *** *** *** ***/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// function for converting linked list to array
const printList = (list) => {
  let p = list;
  let out = [];

  while (p !== null) {
    out.push(p.val);
    p = p.next;
  }

  return out;
};
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
const l1 = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
    )
  )
);
const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

const addTwoNumbers = (l1, l2) => {
  const head = new ListNode((l1.val + l2.val) % 10);
  let c_l1 = l1.next,
    c_l2 = l2.next,
    current = head,
    holder = parseInt((l1.val + l2.val) / 10);

  while (c_l1 !== null || c_l2 !== null) {
    let val_1 = c_l1 === null ? 0 : c_l1.val,
      val_2 = c_l2 === null ? 0 : c_l2.val;

    let tmp = val_1 + val_2 + holder;
    current.next = new ListNode(tmp % 10);
    holder = parseInt(tmp / 10);

    c_l1 = c_l1 === null ? null : c_l1.next;
    c_l2 = c_l2 === null ? null : c_l2.next;
    current = current.next;
  }

  if (holder > 0) {
    current.next = new ListNode(holder);
  }

  return head;
};

const output = addTwoNumbers(l1, l2);
console.log(printList(output));
