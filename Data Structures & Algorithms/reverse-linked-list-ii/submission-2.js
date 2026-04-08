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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        let dummy = new ListNode(0, head);
        let leftPrev = dummy, curr = head;

        // find section start
        for(let i = 0; i < left - 1; i++){
            leftPrev = leftPrev.next;
            curr = curr.next; // curr will be at section start
        }

        // reverse section
        let prev = null;
        for(let i = 0; i < right - left + 1; i++){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        // join links
        leftPrev.next.next = curr; // curr is node after right
        leftPrev.next = prev; // prev is right

        return dummy.next;
    }
}
