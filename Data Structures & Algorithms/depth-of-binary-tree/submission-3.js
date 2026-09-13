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
    maxDepth(root) {
        if(root === null) return 0;
        
        let q = new Array();
        q.push(root);

        let level = 0;

        while(q.length !== 0){
            const qSize = q.length;

            for(let i = 0; i < qSize; i++){
                const node = q.shift();

                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
            }

            level++;
        }

        return level;
    }
}
