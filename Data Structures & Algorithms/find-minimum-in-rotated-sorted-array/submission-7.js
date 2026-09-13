class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0,
            right = nums.length - 1;

        while (left < right) {
            // If already sorted, left is the minimum
            if (nums[left] < nums[right]) {
                return nums[left];
            }

            const mid = Math.floor((left + right) / 2);

            if (nums[mid] >= nums[left]) {
                // Minimum is in the right half
                left = mid + 1;
            } else {
                // Minimum is in the left half, including mid
                right = mid;
            }
        }

        return nums[left];
    }
}
