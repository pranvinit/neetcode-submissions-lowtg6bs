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
    preorderTraversal(root) {
        if (!root) return [];
        const res = [];
        const stack = [root];

        while(stack.length){
            const node = stack.pop();
            res.push(node.val);

            if(node.right) stack.push(node.right);
            if(node.left) stack.push(node.left);
        }

        return res;
    }
}
