class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let speed = 1;

        while(true){
            let totalTime = 0; // time to eat all piles
            for(let pile of piles){
                totalTime += Math.ceil(pile / speed); // time to eat ith pile
            }

            if(totalTime <= h){
                return speed;
            }
        
            speed++;
        }
    }
}
