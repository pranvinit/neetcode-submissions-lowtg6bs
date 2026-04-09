class MyStack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.q2.push(x); // enqueue

        while(this.q1.length){
            this.q2.push(this.q1.shift());
        }

        [this.q1, this.q2] = [this.q2, this.q1];
    }

    /**
     * @return {number}
     */
    pop() {
        return this.q1.shift(); // dequeue
    }

    /**
     * @return {number}
     */
    top() {
        return this.q1[0]; // peek front
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.q1.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
