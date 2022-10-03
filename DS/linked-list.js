class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);
        if(!this.isEmpty()) node.next = this.head;
        this.head = node;
        this.size++;
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()) this.head = node;
        else{
            let temp = this.head;
            while(temp.next) temp = temp.next;
            temp.next = node;
        }
        this.size++;
    }

    insert(value,index){
        if(index < 0 || index > this.size) return;
        if(index === 0) this.prepend(value);
        else{
            const node = new Node(value);
            let temp = this.head;
            for(let i=0;i<index-1;i++){
                temp = temp.next;
            }
            node.next = temp.next;
            temp.next = node;
            this.size++;
        }
    }

    removeFrom(index){
        if(index < 0 || index > this.size) return null;
        let removeNode;
        if(index === 0){
            removeNode = this.head;
            this.head = this.head.next;
        }else{
            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--;
        return removeNode.value;
    }

    removeValue(value){
        if(this.isEmpty()) return null;
        if(this.head.value === value){
            this.head = this.head.next;
            this.size--;
            return value;
        }else{
            let prev = this.head;
            while(prev.next && prev.next.value!==value){
                prev=prev.next;
            }
            if(prev.next){
                let removeNode = prev.next;
                prev.next=removeNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    search(value){
        if(this.isEmpty()) return -1;
        let i=0;
        let curr = this.head;
        while(curr){
            if(curr.value === value) return i;
            curr = curr.next;
            i++;
        }
        return -1;
    }

    print(){
        if(this.isEmpty()) console.log("List is empty !!!");
        else{
            let current = this.head;
            let str = '';
            while(current){
                str += `${current.value} `;
                current = current.next;
            }
            console.log(str);
        }
    }
}

const list = new LinkedList()

console.log("List is empty ? : ",list.isEmpty());
console.log("List size : ",list.getSize());
list.print();
list.prepend(10);
list.prepend(20);
list.prepend(30);
console.log("List is empty ? : ",list.isEmpty());
console.log("List size : ",list.getSize());
list.print();
list.append(40)
list.append(50)
list.append(60)
console.log("List size : ",list.getSize());
list.print();
list.insert(2,2)
list.insert(4,4)
list.insert(8,8)
console.log("List size : ",list.getSize());
list.print();
// console.log(list.removeFrom(10));
// console.log(list.removeFrom(0));
// console.log(list.removeFrom(3));
// console.log(list.removeFrom(5));
// console.log("List size : ",list.getSize());
// list.print();
// console.log(list.removeValue(2))
// console.log(list.removeValue(40))
// console.log(list.removeValue(8))
// console.log(list.removeValue(85))
// console.log("List size : ",list.getSize());
// list.print();
console.log(list.search(20))
console.log(list.search(70))


