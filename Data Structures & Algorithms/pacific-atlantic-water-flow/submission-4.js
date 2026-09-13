class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let ROWS = heights.length,
            COLS = heights[0].length;

        const cellKey = (r, c) => `${r},${c}`;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        let pac = new Set();
        let atl = new Set();

        function dfs(r, c, visit, prevHeight) {
            // base case - out of bounds and bigger height
            if (
                visit.has(cellKey(r, c)) ||
                Math.min(r, c) < 0 ||
                r >= ROWS ||
                c >= COLS ||
                heights[r][c] < prevHeight
            ) {
                return;
            }
            visit.add(cellKey(r, c));

            for (const [dr, dc] of directions) {
                dfs(r + dr, c + dc, visit, heights[r][c]);
            }
        }

        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pac, heights[r][0]);
            dfs(r, COLS - 1, atl, heights[r][COLS - 1]);
        }

        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pac, heights[0][c]);
            dfs(ROWS - 1, c, atl, heights[ROWS - 1][c]);
        }

        let res = [];

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (pac.has(cellKey(i, j)) && atl.has(cellKey(i, j))) {
                    res.push([i, j]);
                }
            }
        }

        return res;
    }
}
