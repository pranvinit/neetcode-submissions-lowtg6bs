class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];
        const path = []; // cur partition
        function dfs(i) { 
            // base case - success (EOS)
            if (i >= s.length) {
                res.push(path.slice());
                return;
            } else {
                for (let j = i; j < s.length; j++) {
                    if (isPalindrome(s, i, j)) {
                        path.push(s.substring(i, j + 1));
                        dfs(j + 1);
                        path.pop();
                    }
                }
            }
        }

        dfs(0);
        return res;

        // Utility function
        function isPalindrome(s, l, r) {
            while (l < r) {
                if (s[l] !== s[r]) return false;
                l++;
                r--;
            }
            return true;
        }
    }
}
