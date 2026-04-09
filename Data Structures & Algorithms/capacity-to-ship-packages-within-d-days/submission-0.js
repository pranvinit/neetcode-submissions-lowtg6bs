class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let capacity = Math.max(...weights);

        while(true){
            let daysTaken = 1;
            let weightCarried = 0;
            for(let weight of weights){
                if(weightCarried + weight > capacity){
                    daysTaken++;
                    weightCarried = 0;
                }
                weightCarried += weight;
            }

            if(daysTaken <= days){
                return capacity;
            }

            capacity++;
        }
    }
}
