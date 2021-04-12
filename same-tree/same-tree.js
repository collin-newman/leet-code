/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let que1 = [p];
    let que2 = [q];
    
    if (!p && !q) {
        return true;
    }
    if (!p || !q) {
        return false;
    }

    while (que1.length > 0 && que2.length > 0) {
        let node1 = que1.shift();
        let node2 = que2.shift();
        if (!node1 && !node2) {
            console.log('both null');
            continue;
        };
        
        if (!node1 || !node2 || node1.val !== node2.val) { 
            console.log('Null = value');
            return false;
        }
        
        que1.push(node1.left);
        que1.push(node1.right);
        que2.push(node2.left);
        que2.push(node2.right);
    }
    return true;
};