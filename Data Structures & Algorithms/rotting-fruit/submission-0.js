class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let ROWS = grid.length,
            COLS = grid[0].length;

        let q = new Array();
        let freshCount = 0;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === 1) {
                    freshCount += 1;
                } else if (grid[i][j] === 2) {
                    q.push([i, j]);
                }
            }
        }

        let time = 0;

        while (q.length !== 0 && freshCount > 0) {
            let levelSize = q.length;
            for (let i = 0; i < levelSize; i++) {
                const [row, col] = q.shift();

                for (const [dr, dc] of directions) {
                    let nr = row + dr,
                        nc = col + dc;

                    if (Math.min(nr, nc) < 0 || nr >= ROWS || nc >= COLS || grid[nr][nc] === 0)
                        continue;
                    else if (grid[nr][nc] === 1) {
                        grid[nr][nc] = 0;
                        q.push([nr, nc]);
                        freshCount--;
                    }
                }
            }
            time += 1;
        }

        return freshCount === 0 ? time : -1;
    }
}
