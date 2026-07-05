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
        if(!root) return 0;
        const stack = [[root, root.val]];
        let goodCount = 0;

        while(stack.length){
            const [node, maxSoFar] = stack.pop();

            if(node.val >= maxSoFar){
                goodCount += 1;
            }

            const newMaxSoFar = Math.max(maxSoFar, node.val);

            if(node.left) stack.push([node.left, newMaxSoFar]);
            if(node.right) stack.push([node.right, newMaxSoFar]);
        }

        return goodCount;
    }
}