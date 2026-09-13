class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        const delta = new Array(n + 1).fill(0);

        for(const [src, dst] of trust){
            delta[src]--; // outgoing trust
            delta[dst]++; // incoming trust
        }

        for(let i = 1; i <=n; i++){
            if(delta[i] === n - 1){
                return i;
            }
        }

        return -1;
    }
}
