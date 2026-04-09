class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const stack = []; // store only indices

        for (let i = 0; i < temperatures.length; i++) {
            while (
                stack.length &&
                temperatures[i] > temperatures[stack.at(-1)]
            ) {
                const prevIndex = stack.pop();
                res[prevIndex] = i - prevIndex;
            }
            stack.push(i);
        }
        return res;
    }
}