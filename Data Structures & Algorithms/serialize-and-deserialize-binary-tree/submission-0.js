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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) return "";
        let str = "";
        const q = [root];

        while (q.length > 0) {
            const levelSize = q.length;
            for (let i = 0; i < levelSize; i++) {
                const node = q.shift();
                if (!node) {
                    str += "#,";
                    continue;
                }
                str += `${node.val},`;
                q.push(node.left);
                q.push(node.right);
            }
        }
        return str;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        data = data.split(",");
        const isNull = (v) => v === undefined || v === "null" || v === "#" || v === "";
        if (isNull(data[0])) return null;
        const root = new TreeNode(data[0]);
        const q = [root];

        let idx = 1;
        while (q.length > 0) {
            const levelSize = q.length;
            for (let i = 0; i < levelSize; i++) {
                const node = q.shift();
                const [left, right] = [data[idx++], data[idx++]];
                if (!isNull(left)) {
                    node.left = new TreeNode(left);
                    q.push(node.left);
                }
                if (!isNull(right)) {
                    node.right = new TreeNode(right);
                    q.push(node.right);
                }
            }
        }

        return root;
    }
}
