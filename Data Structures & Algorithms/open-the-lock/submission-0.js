class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        if (deadends.includes("0000")) {
            return -1;
        }

        function getChildren(lock) {
            const res = [];
            for (let i = 0; i < 4; i++) {
                // move the wheel up (+1)
                let upDigit = String((Number(lock[i]) + 1) % 10);
                res.push(lock.substring(0, i) + upDigit + lock.substring(i + 1));

                // move the wheel down (-1)
                let downDigit = String((Number(lock[i]) - 1 + 10) % 10);
                res.push(lock.substring(0, i) + downDigit + lock.substring(i + 1));
            }

            return res;
        }

        const q = new Array(["0000", 0]); // [lock, turns]
        const visit = new Set(deadends);

        while (q.length !== 0) {
            const [lock, turns] = q.shift();

            if (lock === target) return turns;

            const children = getChildren(lock);
            for(const child of children){
                if(visit.has(child)) continue;
                q.push([child, turns + 1]);
                visit.add(child);
            }
        }

        return -1;
    }
}
