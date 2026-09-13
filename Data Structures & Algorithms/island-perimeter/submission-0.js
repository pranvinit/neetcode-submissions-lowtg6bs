class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        let ROWS = grid.length,
            COLS = grid[0].length;

        const visit = new Set();

        function dfs(i, j) {
            // base case - boundary is +1 valid perimeter
            if (i >= ROWS || j >= COLS || i < 0 || j < 0 || grid[i][j] === 0) {
                return 1;
            }

            // base case - path visited
            if (visit.has(`${i},${j}`)) {
                return 0;
            }

            visit.add(`${i},${j}`);
            let perim = dfs(i, j + 1);
            perim += dfs(i + 1, j);
            perim += dfs(i, j - 1);
            perim += dfs(i - 1, j);

            return perim;
        }

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === 1) {
                    return dfs(i, j);
                }
            }
        }
    }
}
