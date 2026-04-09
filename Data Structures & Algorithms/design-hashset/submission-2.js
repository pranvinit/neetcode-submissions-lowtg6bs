class MyHashSet {
    constructor() {
        this.array = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (!this.array.includes(key)) {
            this.array.push(key);
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
       const index = this.array.indexOf(key);
       if(index !== -1) {
           this.array.splice(index, 1);
       }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.array.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
