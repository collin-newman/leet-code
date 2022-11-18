/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    const nodes = []
    while (head) {
        nodes.push(head)
        head = head.next
    }

    for (let i = nodes.length; i--; i > -1) {
        nodes[i].next = nodes[i - 1]
    }
    if (nodes[0]) {
        nodes[0].next = null
    }
    if (nodes.length) {
        return nodes.pop()
    }
    return head
};