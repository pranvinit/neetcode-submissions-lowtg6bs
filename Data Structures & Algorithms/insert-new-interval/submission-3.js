class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let i = 0;
        let output = [];

        while (i < intervals.length && intervals[i][1] < newInterval[0]) {
            output.push(intervals[i]);
            i++;
        }

        while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
            newInterval = [
                Math.min(intervals[i][0], newInterval[0]),
                Math.max(intervals[i][1], newInterval[1]),
            ];
            i++;
        }

        output.push(newInterval);

        while (i < intervals.length) {
            output.push(intervals[i]);
            i++;
        }

        return output;
    }
}
