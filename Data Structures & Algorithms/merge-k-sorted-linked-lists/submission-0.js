/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    
    mergeTwo(a, b){
        const dummy = new ListNode();
        let tail = dummy;
        while(a && b){
            if(a.val <= b.val) {
                tail.next = a;
                a = a.next; // move to next node in list a
            } else {
                tail.next = b;
                b = b.next; // move to next node in list b
            }
            tail = tail.next;
        }
        tail.next = a || b; // one list ran out: attach rest
        return dummy.next;
    }

    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(lists.length === 0) return null;
        while(lists.length > 1){
            const merged = [];
            for(let i = 0; i < lists.length; i += 2){
                const first = lists[i];
                const second = lists[i + 1] ?? null;
                merged.push(this.mergeTwo(first, second));
            }
            lists = merged;
        }

        return lists[0];
    }
}
