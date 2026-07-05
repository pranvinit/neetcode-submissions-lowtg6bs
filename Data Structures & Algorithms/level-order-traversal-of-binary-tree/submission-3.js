/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        const result = [];
        function visit(node, level){
            if(!node) return;

            result[level] ??= [];
            result[level].push(node.val);

            visit(node.left, level + 1);
            visit(node.right, level + 1);
        }

        visit(root, 0);
        return result;
    }
}