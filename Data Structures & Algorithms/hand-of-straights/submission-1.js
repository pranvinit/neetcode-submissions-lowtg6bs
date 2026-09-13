class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if(hand.length % groupSize !== 0) return false;

        const count = {};
        for (const num of hand) {
            count[num] = (count[num] || 0) + 1;
        }

        // heap can be substituted for sort
        const minHeap = new MinPriorityQueue();
        for(const key in count){
            minHeap.push(Number(key));
        }

        while(!minHeap.isEmpty()){
            const first = minHeap.front();
            for(let i = first; i < first + groupSize; i++){
                if(!(i in count) || count[i] === 0){
                    return false;
                }

                count[i] -= 1;

                if(count[i] === 0){
                    if(i !== minHeap.front()){
                        return false; // hole in our heap
                    }
                    minHeap.pop();
                }
            }
        }

        return true;
    }
}
