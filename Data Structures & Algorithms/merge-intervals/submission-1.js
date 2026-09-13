class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        // greedy idea - sort by start time
        intervals.sort((a, b) => a[0] - b[0]);

        let output = [intervals[0]];
        let previousEnd = intervals[0][1];

        for(let i = 1; i < intervals.length; i++){
            const [start, end] = intervals[i];

            if(start <= previousEnd){
                const last = output.pop();
                previousEnd = Math.max(previousEnd, end);
                output.push([last[0], previousEnd]);
            } else {
                output.push(intervals[i]);
                previousEnd = end;
            }
        }
        
        return output;
    }
}