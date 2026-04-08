class Solution {
	/**
	 * @param {ListNode} l1
	 * @param {ListNode} l2
	 * @return {ListNode}
	 */
	addTwoNumbers( l1, l2 ) {
        const add = (l1, l2, carry) => {
            if(!l1 && !l2 && carry === 0){
                return null;
            }

            let d1 = 0;
            let d2 = 0;

            if(l1){
                d1 = l1.val;
            }

            if(l2){
                d2 = l2.val;
            }

            let sum = d1 + d2 + carry;
            let newCarry = Math.floor(sum / 10);
            let nodeVal = sum % 10;

            let nextNode = add(
                l1 ? l1.next : null,
                l2 ? l2.next : null,
                newCarry
            )

            return new ListNode(nodeVal, nextNode);
        }

        return add(l1, l2, 0);
	}
}