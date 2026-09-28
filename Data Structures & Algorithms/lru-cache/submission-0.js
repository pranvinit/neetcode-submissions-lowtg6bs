class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map(); // key -> node O(1) access
        this.dummy = {};
        this.dummy.next = this.dummy.prev = this.dummy;
    }

    unlink(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    pushFront(node) {
        const first = this.dummy.next;
        node.prev = this.dummy;
        node.next = first;
        first.prev = node;
        this.dummy.next = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const node = this.map.get(key);
        if (!node) return -1;
        this.unlink(node);
        this.pushFront(node);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let node = this.map.get(key);
        if (node) {
            node.value = value;
            this.unlink(node);
        } else {
            node = { key, value };
            this.map.set(key, node);
            if (this.map.size > this.capacity) {
                const lru = this.dummy.prev;
                this.unlink(lru);
                this.map.delete(lru.key);
            }
        }
        this.pushFront(node);
    }
}
