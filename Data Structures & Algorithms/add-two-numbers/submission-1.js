class Solution {
	/**
	 * @param {ListNode} l1
	 * @param {ListNode} l2
	 * @return {ListNode}
	 */
	addTwoNumbers( l1, l2 ) {
		let carry = 0,
			dummy = new ListNode( 0, null );
		let tail = dummy;

		while ( l1 || l2 || carry ) {
			const dl1 = l1 ? l1.val : 0;
			const dl2 = l2 ? l2.val : 0;

			const sum = Number( dl1 ) + Number( dl2 ) + carry;
			const val = sum % 10;
			const newNode = new ListNode( val );
			tail.next = newNode;

			carry = Math.floor( sum / 10 );

			l1 = l1 ? l1.next : l1;
			l2 = l2 ? l2.next : l2;
			tail = tail.next;
		}

		return dummy.next;
	}
}