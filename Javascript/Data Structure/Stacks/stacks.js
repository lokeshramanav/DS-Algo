class Stack {
    count = 0
    stackStorage = {}

    push(value){
        this.count += 1
        this.stackStorage[this.count] = value      
    }

    pop(){
        if(this.count == 0){
            return undefined
        }      
        let result = this.stackStorage[this.count]  
        delete this.stackStorage[this.count]
        this.count -= 1 
        return result
    }

    peek(){
        console.log('This is the top element' , this.stackStorage[this.count])
    }

    size(){
        return this.count
    }

    print(){
        console.log('This is the stack' , this.stackStorage)
    }
    
}

let a = new Stack()
