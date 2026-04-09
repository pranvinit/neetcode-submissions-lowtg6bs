class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pair = position.map((p, i) => [p, speed[i]]);
        pair.sort((a, b) => b[0] - a[0]);

        let stack = [];
        for(let [p, s] of pair){
            const time = (target - p) / s;
            stack.push(time);

            if(stack.length >= 2 && stack.at(-1) <= stack.at(-2)){ // time to reach target is less
                stack.pop(); // merge
            }
        }

        return stack.length;
    }
}
