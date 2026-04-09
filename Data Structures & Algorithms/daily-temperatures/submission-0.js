class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const ans = [];
        for(let i = 0; i < temperatures.length; i++){
            let found = false;
            for(let j = i + 1; j < temperatures.length; j++){
                if(temperatures[j] > temperatures[i]){
                    found = true;
                    ans.push(j - i);
                    break;
                }
            }
            if(!found) ans.push(0);
        }

        return ans;
    }
}
