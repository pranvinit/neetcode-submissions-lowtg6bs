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
     * @return {number}
     */
    goodNodes(root) {
        function dfs(node, maxSoFar){
            if(!node) return 0;

            let count = 0;
            if(node.val >= maxSoFar){
                count = 1;
            }

            let newMaxSoFar = Math.max(maxSoFar, node.val);

            return count
                + dfs(node.left, newMaxSoFar)
                + dfs(node.right, newMaxSoFar);
        }

        return dfs(root, root.val);
    }
}
