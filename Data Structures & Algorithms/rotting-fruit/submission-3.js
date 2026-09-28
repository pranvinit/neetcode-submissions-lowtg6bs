class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let freshCount = 0;
        let rottenQueue = [];

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) freshCount++;
                if (grid[i][j] === 2) rottenQueue.push([i, j]);
            }
        }

        const dirs = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];

        let time = 0;

        while (rottenQueue.length && freshCount > 0) {
            time++;
            const queueSize = rottenQueue.length;
            for (let i = 0; i < queueSize; i++) {
                const [row, col] = rottenQueue.shift();
                for (const [dr, dc] of dirs) {
                    const nr = row + dr;
                    const nc = col + dc;
                    if (nr < 0 || nr >= grid.length || nc < 0 || nc >= grid[0].length) continue; // out of bounds
                    if (grid[nr][nc] === 1) {
                        grid[nr][nc] = 2;
                        freshCount--;
                        rottenQueue.push([nr, nc]);
                    }
                }
            }
        }

        return freshCount === 0 ? time : -1;
    }
}
