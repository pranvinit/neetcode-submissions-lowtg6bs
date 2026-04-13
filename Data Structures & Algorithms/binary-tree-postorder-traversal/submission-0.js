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
    postorderTraversal(root) {
        const res = [];

        function postOrder(root){
            if(!root) return;

            postOrder(root.left);
            postOrder(root.right);
            res.push(root.val);
        }

        postOrder(root);
        return res;

    }
}
