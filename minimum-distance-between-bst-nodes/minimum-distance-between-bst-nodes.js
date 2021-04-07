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
 * @return {number}
 */
var minDiffInBST = function(root) {
    let nodes = [];
    
    const gatherData = (node) => {
        if (node.val) {
            nodes.push(node.val);
        }
        
        if (node.left) {
            gatherData(node.left);
        }
        
        if (node.right) {
            gatherData(node.right);
        }
        
        return;
    }
    
    gatherData(root);
    
    let minDif = Infinity;
    
    for (let i = 0; i < nodes.length; i++) {
        for (let j = 0; j < nodes.length; j++) {
            if (i !== j) {
                if (Math.abs(nodes[i] - nodes[j]) < minDif) {
                    minDif = Math.abs(nodes[i] - nodes[j]);
                }
            }
        }
    }
    
    console.log(nodes);
    return minDif;
};