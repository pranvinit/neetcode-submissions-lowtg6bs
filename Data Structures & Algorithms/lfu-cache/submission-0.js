class Dlist {
    constructor() {
        this.dummy = {};
        this.dummy.prev = this.dummy.next = this.dummy;
        this.size = 0;
    }

    pushFront(node) {
        const first = this.dummy.next;
        node.prev = this.dummy;
        node.next = first;
        first.prev = node;
        this.dummy.next = node;
        this.size++;
    }

    unlink(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.size--;
    }

    last() {
        return this.dummy.prev; // least recent
    }
}

class LFUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.keyMap = new Map(); // key -> node
        this.freqMap = new Map(); // freq -> Dlist
        this.minFreq = 0;
    }

    listFor(freq) {
        let list = this.freqMap.get(freq);
        if (!list) {
            list = new Dlist();
            this.freqMap.set(freq, list);
        }
        return list;
    }

    touch(node) {
        const list = this.freqMap.get(node.freq);
        list.unlink(node);
        if (list.size == 0) {
            this.freqMap.delete(node.freq);
            if (this.minFreq === node.freq) this.minFreq++;
        }
        node.freq++;
        this.listFor(node.freq).pushFront(node);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const node = this.keyMap.get(key);
        if (!node) return -1;
        this.touch(node);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     */
    put(key, value) {
        if (this.capacity === 0) return;
        let node = this.keyMap.get(key);
        if (node) {
            node.value = value;
            this.touch(node);
            return;
        }
        if (this.keyMap.size === this.capacity) {
            const list = this.freqMap.get(this.minFreq);
            const victim = list.last();
            list.unlink(victim);
            if (list.size === 0) {
                this.freqMap.delete(this.minFreq);
            }
            this.keyMap.delete(victim.key);
        }

        node = { key, value, freq: 1 };
        this.keyMap.set(key, node);
        this.listFor(1).pushFront(node);
        this.minFreq = 1;
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
