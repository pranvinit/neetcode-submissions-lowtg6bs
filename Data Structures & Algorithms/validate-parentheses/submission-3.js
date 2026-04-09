class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{'
        }

        for(const c of s){
            if(closeToOpen[c]){
               if(stack.length === 0 || stack.at(-1) !== closeToOpen[c]){
                return false;
               } else {
                stack.pop(); // remove pair
               }
            } else {
                stack.push(c); // opening parenthesis
            }
        }

        return stack.length === 0;
    }
}
