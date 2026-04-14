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
     * @return {TreeNode}
     */
    invertTree(root) {
        const res = [];

        function invert(root){
            if(!root) return;
            [root.left, root.right] = [root.right, root.left];
            invert(root.left);
            invert(root.right);
        }

        invert(root);
        return root;
    }
}