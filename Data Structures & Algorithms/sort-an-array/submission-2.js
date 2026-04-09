class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        this.mergeSort(nums, 0, nums.length - 1);
        return nums;
    }


    mergeSort(arr, l, r) {
        if(l >= r) return;
        const mid = Math.floor((l + r) / 2);
        this.mergeSort(arr, l, mid);
        this.mergeSort(arr, mid + 1, r);
        this.merge(arr, l, mid, r);
    }

    merge(arr, L, M, R){
        let temp = [];
        let i = L, // start pointers
            j = M + 1;
        while(i <= M && j <= R){
            if(arr[i] <= arr[j]){
                temp.push(arr[i])
                i++;
            } else {
                temp.push(arr[j])
                j++;
            }
        }

        while(i <= M) temp.push(arr[i++]);
        while(j <= R) temp.push(arr[j++]);

        // copy to original arr
        for(let i = L; i <= R; i++){
            arr[i] = temp[i - L];
        }
    }
}
