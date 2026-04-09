class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for(const s of strs){
            res += s.length + "#" + s;
        }
        return res;
    }

    // example str: "33#abc4#defg2#hi"

    /**
     * @returns {string[]}
     */
    decode(str) {
        let res = [], i = 0;
        while(i < str.length){
            let j = i;
            while(str[j] !== "#") j++;
            const len = parseInt(str.substring(i, j));
            res.push(str.substring(j + 1, j + 1 + len));
            i = j + 1 + len;
        }
        return res;
    }
}
