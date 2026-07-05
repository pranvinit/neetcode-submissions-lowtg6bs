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

      if (this.heap[parent] >= this.heap[i]) {
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

      if (right < this.heap.length && this.heap[right] > this.heap[left]) {
        largerChild = right;
      }

      if (this.heap[i] >= this.heap[largerChild]) {
        break;
      }

      [this.heap[i], this.heap[largerChild]] = [
        this.heap[largerChild],
        this.heap[i],
      ];

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
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const heap = new MaxHeap();
        const counter = {};

        for(const task of tasks){
            counter[task] = (counter[task] || 0) + 1;
        }

        for(const count of Object.values(counter)){
            heap.push(count);
        }

        let time = 0;
        const  q = [];

        while(heap.size() > 0 || q.length !== 0){
            time += 1;

            if(heap.size() > 0){
                const count = heap.pop() - 1;
                if(count > 0){
                    q.push([count, time + n])
                }
            }

            if(q.length !== 0 && q[0][1] === time){
                heap.push(q.shift()[0])
            }
        }

        return time;
    }
}
