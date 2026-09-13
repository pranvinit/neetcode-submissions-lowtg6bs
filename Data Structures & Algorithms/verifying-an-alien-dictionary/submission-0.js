class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        const rank = {};

        for (let i = 0; i < order.length; i++) {
            rank[order[i]] = i;
        }

        function dfs(first, second, index) {
            // either word ended
            if (index === first.length || index === second.length) {
                return first.length <= second.length;
            }

            if (rank[first[index]] < rank[second[index]]) {
                return true;
            }

            if (rank[first[index]] > rank[second[index]]) {
                return false;
            }

            return dfs(first, second, index + 1);
        }

        for (let i = 0; i < words.length - 1; i++) {
            if (!dfs(words[i], words[i + 1], 0)) {
                return false;
            }
        }

        return true;
    }
}