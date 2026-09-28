class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let ROWS = heights.length,
            COLS = heights[0].length;

        const pac = new Set();
        const atl = new Set();

        function dfs(i, j, visited, prevH) {
            const key = `${i},${j}`;
            if (i < 0 || i >= ROWS || j < 0 || j >= COLS) return;
            if (visited.has(key) || heights[i][j] < prevH) return;
            visited.add(key);
            dfs(i + 1, j, visited, heights[i][j]);
            dfs(i - 1, j, visited, heights[i][j]);
            dfs(i, j + 1, visited, heights[i][j]);
            dfs(i, j - 1, visited, heights[i][j]);
        }

        for (let col = 0; col < COLS; col++) {
            dfs(0, col, pac, -Infinity);
            dfs(ROWS - 1, col, atl, -Infinity);
        }

        for (let row = 0; row < ROWS; row++) {
            dfs(row, 0, pac, -Infinity);
            dfs(row, COLS - 1, atl, -Infinity);
        }

        const res = [];

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                const key = `${i},${j}`;
                if(pac.has(key) && atl.has(key)){
                    res.push([i, j]);
                }
            }
        }

        return res;
    }
}
