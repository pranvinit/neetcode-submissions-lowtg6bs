class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        let total = 0;

        for(const op of operations){
            switch(op){
                case '+': {
                    const val = stack.at(-1) + stack.at(-2);
                    stack.push(val);
                    total += val;
                    break;
                }
                case 'D': {
                    const val = stack.at(-1) * 2;
                    stack.push(val);
                    total += val;
                    break;
                }
                case 'C':
                    total -= stack.pop();
                    break;
                default: {
                    const val = parseInt(op);
                    stack.push(val);
                    total += val;
                }
            }
        }

        return total;
    }
}