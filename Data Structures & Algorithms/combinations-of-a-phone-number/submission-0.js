class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const res = [];
        const digitToChar = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz",
        };

        function dfs(i, curStr) {
            if (curStr.length === digits.length) {
                res.push(curStr);
                return;
            }

            for (const ch of digitToChar[digits[i]]) {
                dfs(i + 1, curStr + ch);
            }
        }
        if (digits.length) {
            dfs(0, "");
        }
        return res;
    }
}
