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

    minValNode(cur){
        while(cur && cur.left){
            cur = cur.left;
        }
        return cur;
    }

    /**
     * @param {TreeNode} root
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if(!root) return null;

        if (key > root.val){
            root.right = this.deleteNode(root.right, key);
        } else if (key < root.val){
            root.left = this.deleteNode(root.left, key);
        } else {
            if(!root.right) return root.left;
            else if (!root.left) return root.right;
            else {
                const minNode = this.minValNode(root.right); // from right subtree
                root.val = minNode.val;
                root.right = this.deleteNode(root.right, minNode.val);
            }
        }
        return root;
    }
}