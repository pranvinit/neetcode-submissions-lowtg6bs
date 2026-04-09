class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        const s1Sorted = s1.split('').sort().join('');

        for(let i = 0; i < s2.length; i++){
            let temp = '';
            for(let j = i; j < s2.length; j++){
                temp += s2[j];
                temp = temp.split('').sort().join('');
                if(temp === s1Sorted) return true;
            }
        }

        return false;
    }
}
