
export {trie}
class Node{
    constructor(aChar){
     this.char = aChar;
     this.isWord = false;
     this.childrens = new Map()
    } 
 }

class Trie{
    constructor(){
    this.root = new Node('0');
    }

    insert(word){
    let curr = this.root;
    let char;
    
    for(let i = 0; i<word.length; i++){
        char = word.charAt(i);        
        if(!curr.childrens.has(char)) curr.childrens.set(char, new Node(char));
        curr = curr.childrens.get(char)
     }
    curr.isWord = true;
    } 

     getNode(word){
        let curr = this.root;
        let char;
        for(let i =0; i<word.length; i++){
            char = word.charAt(i);
            if(!curr.childrens.has(char)) return null;
            curr = curr.childrens.get(char)
        }
        return curr;
    }
    
     search(word){
       const node = this.getNode(word)
        return node != null && node.isWord
    }
    
     startWith(prefix){
        return this.getNode(prefix) != null;
    }
    
     wordsWithPrefix(prefix){
        const words = []
        let prefixNode = this.getNode(prefix)
        if(prefixNode != null) {
            this.addWords(prefixNode, prefix, words)
        } 
        return words;
    }
    
     addWords(node, word, wordList){
        if(node.isWord) wordList.push(word);
        node.childrens.forEach(childNode => {
            let char = childNode.char;
            this.addWords(childNode, word.concat(char), wordList)
        });
    }
}

 const trie = new Trie()

 
 

 
