/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head.next === null) {
        return null;
    }
    const traverse = (node) => {
        const nodes = [];
        while (node) {
            nodes.push(node);
            node = node.next;
        }
        return nodes;
    }
    const listNodes = traverse(head);
    const len = listNodes.length;
    // if n is the same as the list length just remove the first node
    if (n === len) {
        head = head.next;
        return head;
    }
    // if linked list only has 2 remove the last node
    // the case of removing the first node is handled in the
    // above edge case
    if (len === 2) {
        head.next = null;
        return head;
    }
    const newNext = listNodes[len - n + 1] !== undefined ? listNodes[len - n + 1] : null;
    listNodes[len - n - 1].next = newNext;
    return head;
};