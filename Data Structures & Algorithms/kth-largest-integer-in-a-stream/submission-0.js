class MinHeap {
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

      if (this.heap[parent] <= this.heap[i]) {
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

    const minimum = this.heap[1];

    this.heap[1] = this.heap.pop(); // replace root with last value

    let i = 1;

    // Bubble down
    while (2 * i < this.heap.length) {
      // left child does not overflow
      const left = 2 * i;
      const right = 2 * i + 1;

      let smallerChild = left;

      if (right < this.heap.length && this.heap[right] < this.heap[left]) {
        smallerChild = right;
      }

      if (this.heap[i] <= this.heap[smallerChild]) {
        break;
      }

      [this.heap[i], this.heap[smallerChild]] = [
        this.heap[smallerChild],
        this.heap[i],
      ];

      i = smallerChild;
    }

    return minimum; // return root;
  }

  peek() {
    return this.heap[1] ?? null;
  }

  size() {
    return this.heap.length - 1; // 1-indexed
  }
}

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = new MinHeap();

        for(const num of nums){
            this.heap.push(num);
        }

        while(this.heap.size() > k){
            this.heap.pop();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.push(val);
        
        if(this.heap.size() > this.k){
            this.heap.pop();
        }
        return this.heap.peek();
    }
}
