class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        if(intervals.length === 1) return 0;

        // greedy idea - sort by earliest ending intervals
        // reasoning - interval that ends earlier leaves the most room for future intervals
        intervals.sort((a, b) => a[1] - b[1]);

        let removals = 0;
        let previousEnd = intervals[0][1];

        for(let i = 1; i < intervals.length; i++){
            const [start, end] = intervals[i];

            if(start < previousEnd){
                // interval overlaps the interval we kept
                removals++;
            } else {
                // No overlap - keep the current interval.
                previousEnd = end;
            }
        }

        return removals;
    }
}