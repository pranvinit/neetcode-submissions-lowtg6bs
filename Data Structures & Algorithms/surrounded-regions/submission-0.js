class Solution {
    /**
     * @param {character[][] board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let ROWS = board.length,
            COLS = board[0].length;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        function dfs(r, c) {
            // base case - out of bounds
            if (Math.min(r, c) < 0 || r >= ROWS || c >= COLS) {
                return;
            }

            // base case - invalid start (not a 'O')
            if(board[r][c] !== "O") return;

            board[r][c] = "T";
            for (const [dr, dc] of directions) {
                dfs(r + dr, c + dc);
            }
        }
        // Check left and right borders.
        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0);
            dfs(r, COLS - 1);
        }

        // Check top and bottom borders.
        for (let c = 0; c < COLS; c++) {
            dfs(0, c);
            dfs(ROWS - 1, c);
        }

        // Final pass: Capture surrounded regions and restore border-connected regions
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === "O") board[r][c] = "X";
                else if (board[r][c] === "T") board[r][c] = "O";
            }
        }
    }
}