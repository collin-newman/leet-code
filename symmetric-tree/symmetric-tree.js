/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) {
        return true;
    }
    
    let que1 = [root.left];
    let que2 = [root.right];
    
    while (que1.length > 0 && que2.length > 0) {
        const item1 = que1.shift();
        const item2 = que2.shift();
        
        if (!item1 && !item2) {
            continue;
        }
        
        if (!item1 || !item2 || item1.val !== item2.val) {
            return false;
        }
        que1.push(item1.left);
        que1.push(item1.right);
        que2.push(item2.right);
        que2.push(item2.left);
    }
    return true;
};