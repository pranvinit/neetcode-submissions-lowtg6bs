class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0,
            r = nums.length - 1;

        // find the pivot - min value
        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if (nums[m] > nums[r]) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        const pivot = l;

        // run standard binary search on sorted halves
        const isInLeftRange = target >= nums[0] && target <= nums[pivot - 1];
        return this.binarySearch(
            nums,
            target,
            isInLeftRange ? 0 : pivot,
            isInLeftRange ? pivot - 1 : nums.length - 1,
        );
    }

    binarySearch(nums, target, left, right) {
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
}
