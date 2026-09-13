/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (intervals.length === 0) return 0;

        const starts = intervals.map((i) => i.start).sort((a, b) => a - b);
        const ends = intervals.map((i) => i.end).sort((a, b) => a - b);

        let startPointer = 0;
        let endPointer = 0;

        let activeRooms = 0;
        let maxRooms = 0;

        while(startPointer < intervals.length){
            if(starts[startPointer] < ends[endPointer]){
                // new meeting begins before the earliest ends
                activeRooms++;
                maxRooms = Math.max(maxRooms, activeRooms);
                startPointer++;

            } else {
                // earliest meeting has ended, freeing the room
                activeRooms--;
                endPointer++;
            }
        }

        return maxRooms;
    }
}
