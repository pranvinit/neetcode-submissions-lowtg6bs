class TrieNode {
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let current = this.root;

        for(const char of word){
            if(!current.children[char]){
               current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }

        current.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let current = this.root;

        for(const char of word){
            if(!current.children[char]){
                return false;
            }
            current = current.children[char];
        }

        return current.isEndOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
           let current = this.root;

        for(const char of prefix){
            if(!current.children[char]){
                return false;
            }
            current = current.children[char];
        }

        return true;
    }
}
