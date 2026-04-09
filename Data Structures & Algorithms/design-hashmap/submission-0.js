class ListNode {
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class MyHashMap {
    constructor() {
        this.map = Array.from({length: 9973}, () => new ListNode(0, 0))
    }

    /**
     * @param {number} key
     * @return {number} hash
     */
    hash(key){
        return key % this.map.length;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let cur = this.map[this.hash(key)];
        while(cur.next){
            if (cur.next.key === key){
                cur.next.value = value;
                return;
            }
            cur = cur.next;
        }
        cur.next = new ListNode(key, value);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let cur = this.map[this.hash(key)];
        while(cur.next){
            if (cur.next.key === key){
                return cur.next.value;
            }
            cur = cur.next;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let cur = this.map[this.hash(key)];
        while(cur.next){
            if (cur.next.key === key){
                cur.next = cur.next.next;
                return;
            }
            cur = cur.next;
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
