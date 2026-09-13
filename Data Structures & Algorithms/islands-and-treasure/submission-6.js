class Solution {
    /**
     * @param {number[][]}
     */
    islandsAndTreasure(grid) {
        let ROWS = grid.length,
            COLS = grid[0].length;
        const INF = 2147483647;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        function bfs(r, c) {
            let steps = 0;
            let visit = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

            const q = new Array();
            q.push([r, c]);
            visit[r][c] = true;
            while (q.length > 0) {
                let size = q.length;
                for (let i = 0; i < size; i++) {
                    const [row, col] = q.shift();
                    if (grid[row][col] === 0) return steps;
                    for (let [dr, dc] of directions) {
                        const nr = row + dr,
                            nc = col + dc;
                        if (
                            nr >= 0 &&
                            nr < ROWS &&
                            nc >= 0 &&
                            nc < COLS &&
                            !visit[nr][nc] &&
                            grid[nr][nc] !== -1
                        ) {
                            visit[nr][nc] = true;
                            q.push([nr, nc]);
                        }
                    }
                }
                steps++;
            }

            return INF;
        }

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === INF) {
                    grid[i][j] = bfs(i, j);
                }
            }
        }
    }
}