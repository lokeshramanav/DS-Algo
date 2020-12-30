class Queue {
    collection = []

    print(){
        console.log('Queue Collection', this.collection)
    }

    enqueue(element){
        this.collection.push(element)
    }

    dequeue(){
        return this.collection.shift()
    }

    front(){
        return this.collection[0]
    }

    size(){
        return this.collection.length
    }

    isEmpty(){
        return this.collection.length === 0
    }


}

var q = new Queue(); 
q.enqueue('a'); 
q.enqueue('b');
q.enqueue('c');
q.print(); //OUTPUT ['a' , 'b' , 'c']
q.dequeue(); 
console.log(q.front()); // OUTPUT 'b'
q.print(); //OUTPUT ['b' , 'c']
