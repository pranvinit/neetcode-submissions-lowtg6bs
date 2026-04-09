class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for(const t of tokens){

            if(t === "+"){
                const t1 = stack.pop();
                const t2 = stack.pop();
                const sum = t2 + t1;
                stack.push(sum);

            } else if (t === "-"){
                const t1 = stack.pop();
                const t2 = stack.pop();
                const sub = t2 - t1;
                stack.push(sub);

            } else if (t === "*"){
                const t1 = stack.pop();
                const t2 = stack.pop();
                const mul = t2 * t1;
                stack.push(mul);
            } else if (t === "/"){
                const t1 = stack.pop();
                const t2 = stack.pop();
                const div = Math.trunc(t2 / t1);
                stack.push(div);
            } else {
                stack.push(parseInt(t));
            }
        }

        return stack.at(-1);
    }
}
