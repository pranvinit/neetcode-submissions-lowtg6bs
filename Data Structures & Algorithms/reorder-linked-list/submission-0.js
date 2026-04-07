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
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if(!head || !head.next) return; // no/single node list

        // find middle
        let fast = head, slow = head;

        while(fast.next && fast.next.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow.next;
        slow.next = null;
        let prev = null;
        let curr = second;

        // reverse list
        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        // merge
        let first = head;
            second = prev;
        while(second){
           let temp1 = first.next;
           let temp2 = second.next;

           first.next = second;
           second.next = temp1;
           first = temp1;
           second = temp2;
        }
    }
}
