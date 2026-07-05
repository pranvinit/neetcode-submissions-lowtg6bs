class MaxHeap {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);

        let i = this.heap.length - 1; // pushed value

        // Bubble up
        while (i > 1) {
            // because root (index 1) has no parent
            const parent = Math.floor(i / 2);

            if (this.heap[parent][0] >= this.heap[i][0]) {
                break;
            }

            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) return null;

        if (this.heap.length === 2) {
            return this.heap.pop();
        }

        const maximum = this.heap[1];

        this.heap[1] = this.heap.pop(); // replace root with last value

        let i = 1;

        // Bubble down
        while (2 * i < this.heap.length) {
            // left child does not overflow
            const left = 2 * i;
            const right = 2 * i + 1;

            let largerChild = left;

            if (right < this.heap.length && this.heap[right][0] > this.heap[left][0]) {
                largerChild = right;
            }

            if (this.heap[i][0] >= this.heap[largerChild][0]) {
                break;
            }

            [this.heap[i], this.heap[largerChild]] = [this.heap[largerChild], this.heap[i]];

            i = largerChild;
        }

        return maximum; // return root;
    }

    peek() {
        return this.heap[1] ?? null;
    }

    size() {
        return this.heap.length - 1; // 1-indexed
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        const count = {};

        for (const c of s) {
            count[c] = (count[c] || 0) + 1;
        }

        let res = '';
        const maxHeap = new MaxHeap();
        const q = [];

        for(const k in count){
            maxHeap.push([count[k], k]);
        }

        while(maxHeap.size() > 0){
            const mostFreq = maxHeap.pop();
            res += mostFreq[1];
            mostFreq[0]--;

            if(mostFreq[0] !== 0){
                q.push(mostFreq);
            }

            if(q.length && res.at(-1) !== q[0][1]){
                const oldMostFreq = q.shift();
                maxHeap.push(oldMostFreq);
            }
        }

        return res.length === s.length ? res : "";
    }
}
