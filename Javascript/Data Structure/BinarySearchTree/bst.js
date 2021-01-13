const Node = require('./node');

class BinarySearchTree {

    constructor(){
        this.root = null
    }

    addToBst(data){
        if(this.root == null){
            this.root = new Node(data)
        }else{
            const searchTree = (node)=>{
                if(data < node.data ){
                    if(node.left == null){
                        return node.left = new Node(data);
                    }
                    else{
                        searchTree(node.left)
                    }
                }
                else if(data > node.data){
                    if(node.right == null){
                        return node.right = new Node(data);
                    }
                    else{
                        searchTree(node.right)
                    }

                }
                else{
                    return null
                }
            }
            return searchTree(this.root)
        }
    }

    findMin(){
        let current = this.root;
        while(current.left != null){
            current = current.left
        }
        return current.data;
    }

    findMax(){
        let current = this.root;
        while(current.right != null){
            current = current.right
        }
        return current.data;
    }

    find(data){
        let current = this.root;
        while(current){
            if(data === current.data){
                return current
            }else{
                if(data < current.data){
                    current = current.left
                }
                if(data > current.data){
                    current = current.right
                }
            }            
        }
        return null

    }

    isPresent(data){
        let current = this.root;
        while(current){
            if(data === current.data){
                return true
            }else{
                if(data < current.data){
                    current = current.left
                }
                if(data > current.data){
                    current = current.right
                }
            }
        }
        return false        
    }

    remove(data){
        const removeNode = (node , data)=>{
            //IF TREE IS EMPTY
            if(node == null){
                return null;
            }
            else if (data < node.data){
                node.left = removeNode(node.left , data)
            }
            else if (data > node.data){
                node.right = removeNode(node.right , data)
            }
            //FOUND THE NODE
            else{
                //case 1 : no child node 
                if(node.left == null && node.right ==null){
                    return null
                }
                //case 2: only 1 child node either left node or right node 
                if (node.left == null) {
                    return node.right;
                }
                if (node.right == null) {
                    return node.left;
                }
                //case 3: node has two children 
                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                console.log("this is the data", tempNode.data)
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node
            }            
        }
        this.root = removeNode(this.root, data)
    }


}

let a = new BinarySearchTree()
a.addToBst(12)
a.addToBst(5)
a.addToBst(15)
a.addToBst(3)
a.addToBst(7)
a.addToBst(13)
a.addToBst(17)
a.addToBst(1)
a.addToBst(9)
a.addToBst(8)
a.addToBst(11)
a.addToBst(14)
a.addToBst(20)
a.addToBst(18)

console.log(a.isPresent(11))
console.log("1.", a.find(12));
console.log("2.", a.root);
console.log('2.5',a)
a.remove(11)
console.log('3.',a)