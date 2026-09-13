class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ]
        let ROWS = grid.length,
            COLS = grid[0].length;

        let islands = 0;

        function dfs(r, c) {
            // base case - out of bounds
            if (Math.min(r, c) < 0 || r >= ROWS || c >= COLS || grid[r][c] === '0') {
                return;
            }

            // mark - cell as 'water'
            grid[r][c] = '0';

            // recurse - in all 4 directions
            for(const [dr, dc] of directions){
                dfs(r + dr, c + dc);
            }
        }

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === '1') {
                    islands += 1; // found an island
                    dfs(i, j); // traced the island
                }
            }
        }

        return islands;
    }
}
