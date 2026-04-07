// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;
        let curr = head;
        let map = new Map();

        while(curr){
            let copy = new Node(curr.val)
            map.set(curr, copy);
            curr = curr.next;
        }

        curr = head;
        while(curr){
            let copy = map.get(curr);
            copy.next = curr.next ? map.get(curr.next) : null;
            copy.random = curr.random ? map.get(curr.random) : null;
            curr = curr.next;
        }

        return map.get(head);
    }
}
