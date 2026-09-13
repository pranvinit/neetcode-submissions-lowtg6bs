class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        const visit = new Set(deadends);
        if(visit.has('0000')) return -1;

        if(target === '0000') return 0;

        const q = ['0000'];
        visit.add('0000');
        let steps = 0;

        while(q.length !== 0){
            steps++;
            const levelSize = q.length;
            for(let i = levelSize; i > 0; i--){
                const lock = q.shift();
                for(let j = 0; j < 4; j++){
                    for(let move of [1, -1]){
                        const digit = (parseInt(lock[j]) + move + 10) % 10;  
                        const nextLock = lock.slice(0, j) + digit + lock.slice(j + 1);
                        
                        if(visit.has(nextLock)) continue;
                        if(nextLock === target) return steps;
                        
                        q.push(nextLock);
                        visit.add(nextLock);
                    }
                }
            }
        }
        return - 1;
    }
}