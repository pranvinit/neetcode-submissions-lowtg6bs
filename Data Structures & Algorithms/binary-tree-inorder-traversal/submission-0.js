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
    inorderTraversal(root) {
        const res = [];

        function inOrder(root){
            if(!root) return;

            inOrder(root.left);
            res.push(root.val);
            inOrder(root.right);
        }

        inOrder(root);
        return res;
    }
}