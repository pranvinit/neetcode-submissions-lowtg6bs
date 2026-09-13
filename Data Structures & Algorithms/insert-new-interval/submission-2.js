class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const output = [];

        for (let i = 0; i < intervals.length; i++) {
            const [insertStart, insertEnd] = newInterval;
            const [currentStart, currentEnd] = intervals[i];

            if (insertEnd < currentStart) {
                output.push(newInterval);
                return [...output, ...intervals.slice(i)];
            } else if (insertStart > currentEnd) {
                output.push(intervals[i]);
            } else {
                newInterval = [
                    Math.min(insertStart, currentStart),
                    Math.max(insertEnd, currentEnd),
                ];
            }
        }

        output.push(newInterval);
        return output;
    }
}
