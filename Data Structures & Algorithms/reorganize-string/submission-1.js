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

    isEmpty() {
        return this.heap.length === 1;
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

        const maxHeap = new MaxHeap();
        for (const k in count) {
            maxHeap.push([count[k], k]);
        }

        let res = "";
        let prev = null;

        while (!maxHeap.isEmpty() || prev) {
            if (maxHeap.isEmpty() && prev) {
                return "";
            }

            let [cnt, c] = maxHeap.pop();
            res += c;
            --cnt;

            if (prev) {
                maxHeap.push(prev);
                prev = null;
            }

            if (cnt > 0) {
                prev = [cnt, c];
            }
        }
        return res;
    }
}
