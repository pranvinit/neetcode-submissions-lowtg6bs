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
        
        for(let right = 0; right < s2.length; right++){
            let char = s2[right];
            count[char] = (count[char] || 0) - 1;

            if(right - left + 1 > s1.length){ // slide window right
                char = s2[left];
                count[char] = count[char] + 1;
                left++;
            }

            if(Object.values(count).every(v => v === 0)){
                return true;
            }
        }

        return false;
    }
}
