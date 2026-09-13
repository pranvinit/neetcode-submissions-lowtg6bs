class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
   merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);

        const output = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            const [currentStart, currentEnd] = intervals[i];
            const lastInterval = output.at(-1);

            const lastEnd = lastInterval[1];

            if (currentStart <= lastEnd) {
                // overlap - extend the last output interval.
                lastInterval[1] = Math.max(
                    lastEnd,
                    currentEnd
                );
            } else {
                output.push([currentStart, currentEnd]);
            }
        }

        return output;
    }
}