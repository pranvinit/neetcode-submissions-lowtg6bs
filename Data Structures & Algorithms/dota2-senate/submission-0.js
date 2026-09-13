class Solution {
    /**
     * @param {string} senate
     * @return {string}
     */
    predictPartyVictory(senate) {
        const R = new Queue();
        const D = new Queue();
        const n = senate.length;

        for(let i = 0; i < n; i++){
            if(senate[i] === 'R'){
                R.push(i);
            } else {
                D.push(i);
            }
        }

        while(!R.isEmpty() && !D.isEmpty()){
            const rTurn = R.pop();
            const dTurn = D.pop();

            if(rTurn < dTurn){
                R.push(rTurn + n);
            } else {
                D.push(dTurn + n);
            }
        }

        return !R.isEmpty() ? 'Radiant' : 'Dire';

    }
}
