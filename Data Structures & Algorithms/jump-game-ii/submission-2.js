class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let jumps = 0;

        let regionStart = 0;
        let regionEnd = 0;

        while (regionEnd < nums.length - 1) {
            let farthestReach = regionEnd;

            // Check every index reachable with the current
            // number of jumps.
            for (
                let index = regionStart;
                index <= regionEnd;
                index++
            ) {
                farthestReach = Math.max(
                    farthestReach,
                    index + nums[index]
                );
            }

            // The next jump gives us a new reachable region.
            regionStart = regionEnd + 1;
            regionEnd = farthestReach;

            jumps++;
        }

        return jumps;
    }
}