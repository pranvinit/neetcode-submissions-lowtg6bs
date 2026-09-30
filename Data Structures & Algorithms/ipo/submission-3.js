class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        const n = profits.length;
        const order = Array.from({length: n}, (_, i) => i).sort((a, b) => capital[a] - capital[b]);

        let j = 0;
        const heap = new MaxPriorityQueue();

        while(k-- > 0){
            while(j < n && capital[order[j]] <= w){
                heap.enqueue(profits[order[j++]])
            }
            if(heap.isEmpty()) break;
            w += heap.dequeue();
        }

        return w;
    }
}
