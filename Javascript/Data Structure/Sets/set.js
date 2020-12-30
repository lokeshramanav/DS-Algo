class MySet {
    collection = []
    
    add(element){
        this.has(element) ?  console.log("Element already present") : this.collection.push(element)
    }

    has(element){
        return (this.collection.indexOf(element) !== -1)
    }

    values(){
        return this.collection
    }

    remove(element){
        if(this.has(element)){
            this.collection.splice(this.collection.indexOf(element),1)
        }
        console.log("Element not present in set")
    }

    size(){
        return this.collection.length
    }

    union(otherSet){
        let unionSet = new MySet()
        let firstSet = this.values()
        let secondSet =  otherSet.values()
        secondSet.forEach((e)=>{unionSet.add(e)})
        firstSet.forEach((e)=>{unionSet.add(e)})
        return unionSet
    }

    intersection(otherSet){
        let newSet = new MySet()
        let firstSet = this.values()
        firstSet.forEach((e)=>{
            if(otherSet.has(e)){
                newSet.add(e)
            }
        })
        return newSet
    }

    difference(otherSet){
        let differenceSet = new MySet()
        let firstSet = this.values()
        firstSet.forEach((e)=>{
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
    }

    subset(otherSet){
        var firstSet = this.values();
        return firstSet.every(function(value) {
          return otherSet.has(value);
        });
    }

} 


let a = new MySet()
a.add('a')
a.add('b')
a.add('c')
let b = new MySet()
b.add('1')
b.add('2')
b.add('c')
b.add(3)

let c = a.intersection(b)
console.log(c.values())
console.log(a.values())
console.log(b.values())