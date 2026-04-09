class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const nrows = matrix.length,
        ncolumns = matrix[0].length;

        let l = 0,
        r = ncolumns - 1,
        cri = 0;

        while(cri <= nrows - 1){
            if(matrix[cri][r] < target){
                cri++;
            } else {
                while(l <= r){
                    let m = Math.floor((l + r) / 2);
                    if(matrix[cri][m] < target){
                        l = m + 1;
                    } else if (matrix[cri][m] > target){
                        r = m - 1;
                    } else {
                        return true;
                    }
                }

                return false;
            }
        }

        return false;
    }
}
