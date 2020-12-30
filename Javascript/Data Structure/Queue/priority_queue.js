class PriorityQueue {
    collection = []

    print(){
        console.log('Queue Collection', this.collection)
    }

    enqueue(element){
        if (this.isEmpty()){ 
            this.collection.push(element);
        } else{
            var added = false 
            console.log('Length' , this.collection.length)
            for(var i = 0; i<this.collection.length ; i++){
                if(element[1] < this.collection[i][1]){
                    this.collection.splice(i, 0 , element)
                    added = true
                    break;
                }
            }
            if(!added){
                this.collection.push(element)
            }
        }
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
        return this.collection.length == 0
    }
}

var pq = new PriorityQueue(); 
pq.enqueue(['Beau Carnes', 2]); 
pq.print()
pq.enqueue(['Quincy Larson', 3]);
pq.print()
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.print()
pq.enqueue(['Briana Swift', 2])
pq.print()

pq.dequeue();
pq.print()
console.log(pq.front());
pq.print()