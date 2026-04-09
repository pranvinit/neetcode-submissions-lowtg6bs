class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const res = [];

        for(const op of operations){
            switch(op){
                case '+':
                    const sum = res.at(-1) + res.at(-2);
                    res.push(sum);
                    break;
                case 'D':
                    const double = res.at(-1) * 2;
                    res.push(double);
                    break;
                case 'C':
                    res.pop();
                    break;
                default:
                    res.push(parseInt(op));
            }
        }

        return res.length ? res.reduce((a, b) => a + b) : 0;
    }
}
