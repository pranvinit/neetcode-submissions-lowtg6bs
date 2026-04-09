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
     * @return {ListNode}
     */
    reverseList(head) {
        // Base case: empty list or last node
        if(head === null || head.next === null) {
            return head;
        }
        // Step 1: Reverse the rest of the list
        let reversedHead = this.reverseList(head.next);

        // Step 2: Fix current node
        let nextNode = head.next;
        nextNode.next = head; // Make next point to current
        head.next = null; // cut the old forward link

        // Step 3: Always return the head of reversed list
        return reversedHead;
    }
}