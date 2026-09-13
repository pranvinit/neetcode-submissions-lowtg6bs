class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let l = 0;
        let r = 1;

        let res = 1; // arr length is min >= 1
        let prevSign = ""; // start of arr

        while (r < arr.length) {
            if (arr[r - 1] > arr[r] && prevSign !== ">") {
                res = Math.max(res, r - l + 1);
                r++;
                prevSign = ">";
            } else if (arr[r - 1] < arr[r] && prevSign !== "<") {
                res = Math.max(res, r - l + 1);
                r++;
                prevSign = "<";
            } else {
                r = arr[r - 1] === arr[r] ? r + 1 : r;
                l = r - 1;
                prevSign = ""; // start of new window
            }
        }

        return res;
    }
}
