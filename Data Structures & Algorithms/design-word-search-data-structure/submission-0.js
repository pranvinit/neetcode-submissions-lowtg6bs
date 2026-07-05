class TrieNode {
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let current = this.root;

        for(const c of word){
            if(!current.children[c]){
                current.children[c] = new TrieNode();
            }
            current = current.children[c];
        }

        current.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(j, root){
            let current = root;

            for(let i = j; i < word.length; i++){
                let c = word[i];

                if(c === "."){
                    for(let char in current.children){
                        if(dfs(i + 1, current.children[char])){
                            return true;
                        }
                    }
                    return false;
                } else {
                    if(!current.children[c]) return false;
                    current = current.children[c];
                }
            }

            return current.isEndOfWord;
        }

        return dfs(0, this.root)
    }
}