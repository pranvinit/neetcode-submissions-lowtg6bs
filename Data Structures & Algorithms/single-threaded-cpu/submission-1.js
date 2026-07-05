class MinHeap {
    constructor() {
        this.heap = [null];
    }

    isHigherPriority(a, b) {
        if (a[1] !== b[1]) return a[1] < b[1];
        return a[2] < b[2];
    }

    push(value) {
        this.heap.push(value);

        let i = this.heap.length - 1;

        while (i > 1) {
            const parent = Math.floor(i / 2);

            if (this.isHigherPriority(this.heap[parent], this.heap[i])) {
                break;
            }

            [this.heap[parent], this.heap[i]] =
                [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) return null;

        if (this.heap.length === 2) {
            return this.heap.pop();
        }

        const minimum = this.heap[1];
        this.heap[1] = this.heap.pop();

        let i = 1;

        while (2 * i < this.heap.length) {
            const left = 2 * i;
            const right = 2 * i + 1;

            let betterChild = left;

            if (
                right < this.heap.length &&
                this.isHigherPriority(this.heap[right], this.heap[left])
            ) {
                betterChild = right;
            }

            if (this.isHigherPriority(this.heap[i], this.heap[betterChild])) {
                break;
            }

            [this.heap[i], this.heap[betterChild]] =
                [this.heap[betterChild], this.heap[i]];

            i = betterChild;
        }

        return minimum;
    }

    peek() {
        return this.heap[1] ?? null;
    }

    size() {
        return this.heap.length - 1;
    }

    isEmpty() {
        return this.heap.length === 1;
    }
}

class Solution {
    /**
     * @param {number[][]} tasks
     * @return {number[]}
     */
    getOrder(tasks) {
        tasks = tasks
            .map((t, i) => {
                return [...t, i];
            })
            .sort((a, b) => a[0] - b[0]);

        let time = 0;
        let i = 0;
        let res = [];
        const minHeap = new MinHeap();

        while (res.length < tasks.length) {
            while (i < tasks.length && tasks[i][0] <= time) {
                minHeap.push(tasks[i]);
                i++;
            }

            // jump time to best (least late) eneuque task time
            if(minHeap.isEmpty()){
                time = tasks[i][0];
            } else {
                const task = minHeap.pop();
                time += task[1];
                res.push(task[2]);
            }
        }

        return res;
    }
}
