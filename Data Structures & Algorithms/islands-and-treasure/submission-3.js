class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const cellKey = (r, c) => `${r},${c}`;

        let ROWS = grid.length,
            COLS = grid[0].length;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        const INF = 2147483647;

        function bfs(r, c) {
            const q = new Array([r, c]);
            let visit = new Set();

            visit.add(cellKey(r,c));
            let steps = 0;

            while(q.length !== 0){
                const levelSize = q.length;
                for(let i = 0; i < levelSize; i++){
                    const [row, col] = q.shift();

                    if(grid[row][col] === 0) return steps;
                    for(let [dr, dc] of directions){
                        let nr = row + dr,
                            nc = col + dc;   
                        if(
                            Math.min(nr, nc) < 0 ||
                            nr >= ROWS ||
                            nc >= COLS ||
                            grid[nr][nc] === - 1 ||
                            visit.has(cellKey(nr, nc))
                        ) continue;
                        else {
                            visit.add(cellKey(nr, nc));
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
