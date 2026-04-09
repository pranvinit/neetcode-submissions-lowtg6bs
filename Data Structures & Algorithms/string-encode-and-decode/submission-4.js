class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for(const str of strs){
            res += str.length + "#" + str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [], i = 0;

        while(i < str.length){
            let j = i;
            while(str[j] !== "#") j++;
            const len = parseInt(str.substring(i, j));
            res.push(str.substring(j + 1, j + 1 + len)); // end is not inclusive
            i = j + 1 + len;
        }
        return res;
    }
}
