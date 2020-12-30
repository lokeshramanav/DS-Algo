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


}

let a = new BinarySearchTree()
a.addToBst(5)
a.addToBst(4)
a.addToBst(7)
a.addToBst(3)
a.addToBst(11)
a.addToBst(2)
console.log(a.isPresent(11)) //OUTPUT 2
console.log(a.find(7))
