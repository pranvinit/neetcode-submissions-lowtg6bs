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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        const result = [];

        function visit(node, level){
            if(!node) return;

            result[level] ??= node.val; // fill up right view nodes first

            if(node.right) visit(node.right, level + 1);
            if(node.left) visit(node.left, level + 1);
        }

        visit(root, 0);
        return result;
    }
}
