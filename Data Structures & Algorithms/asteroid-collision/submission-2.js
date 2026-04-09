class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];

        for(let a of asteroids){
            // stack top to moving right and incoming is moving left
            while(stack.length && a < 0 && stack.at(-1) > 0){
                const diff = a + stack.at(-1);

                if(diff < 0){
                    stack.pop();
                } else if (diff > 0){
                    a = 0;
                } else {
                    a = 0;
                    stack.pop();
                }
            }

            // set a to 0 when it is destroyed.
            if(a !== 0){
                stack.push(a);
            }
            
        }

        return stack;
    }
}
