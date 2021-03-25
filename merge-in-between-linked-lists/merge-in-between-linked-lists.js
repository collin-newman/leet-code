/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let firstPass = list1;
    for (let i = 0; i < b + 1; i++) {
        firstPass = firstPass.next;
    }
    let secondPass = list1;
    let tempNode = list1;
    let iteration = 0;
    while (tempNode.next) {
        if (iteration === a - 1) {
            tempNode.next = list2;
        } else {
            tempNode = tempNode.next;
        }
        iteration++;
    }
    tempNode.next = firstPass;
    
    return list1;
};