class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let stack = [];
        let res = [];

        function backtrack(openN, closedN) {
            if (openN === n && closedN === n) {
                res.push(stack.join(""));
                return;
            }

            if (openN < n) {
                stack.push("(");
                backtrack(openN + 1, closedN);
                // undo choice
                stack.pop();
            }

            if (closedN < openN) {
                stack.push(")");
                backtrack(openN, closedN + 1);
                // undo choice
                stack.pop();
            }
        }

        backtrack(0, 0);
        return res;
    }
}
