class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (const t of tokens) {
            if (!isNaN(t)) {
                stack.push(+t);
            } else {
                const b = stack.pop();
                const a = stack.pop();
                switch (t) {
                    case "+": stack.push(a + b); break;
                    case "-": stack.push(a - b); break;
                    case "*": stack.push(a * b); break;
                    case "/": stack.push(Math.trunc(a / b));
                }
            }
        }
        return stack[0];
    }
}
