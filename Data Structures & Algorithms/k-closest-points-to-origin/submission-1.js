class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value, p) {
    this.heap.push({value, p});

    let i = this.heap.length - 1; // pushed value

    // Bubble up
    while (i > 1) {
      // because root (index 1) has no parent
      const parent = Math.floor(i / 2);

      if (this.heap[parent].value >= this.heap[i].value) {
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

      if (right < this.heap.length && this.heap[right].value > this.heap[left].value) {
        largerChild = right;
      }

      if (this.heap[i].value >= this.heap[largerChild].value) {
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
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = new MaxHeap();

        for(const point of points){
            const distance = this.euclideanDistance(point);
            heap.push(distance, point);

            if(heap.size() > k){
                heap.pop();
            }
        }


        const result = [];

        while(true){
            const node = heap.pop();
            if(node === null) break;
            result.push(node.p);
        }

        return result;
    }

    euclideanDistance(points){
        const [x, y] = points;
        return Math.sqrt((x ** 2) + (y ** 2))
    }
}
