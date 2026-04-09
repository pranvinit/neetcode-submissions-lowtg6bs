class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        const count = {};

        for(const c of s1){
            count[c] = (count[c] || 0) + 1;
        }

        let left = 0;
        let needed = s1.length;
        
        for(let right = 0; right < s2.length; right++){
            let char = s2[right];

            if(count[char] > 0){
                needed--;
            }

            count[char] = (count[char] || 0) - 1;

            if(right - left + 1 > s1.length){ // slide window right
                const leftChar = s2[left];

                if(count[leftChar] >= 0){
                    needed++;
                }

                count[leftChar]++
                left++;
            }

            if(needed === 0) return true;
        }

        return false;
    }
}
