import Node from './node.js';

export default class LinkedList {
    constructor() {
        this.listHead = null; 

    }

    prepend(val){
        let temp = null; 
        if(this.listHead != null) temp = this.listHead;
        this.listHead = new Node(val); 
        this.listHead.nextNode = temp;  
    }

    append(val){
        if(this.listHead == null) this.prepend(val); 
        else{
            let temp = this.listHead; 
            while(temp.nextNode != null) temp = temp.nextNode;
            temp.nextNode = new Node(val); 
        }
    }

    size() {
        let temp = this.listHead; 
        let count = 0; 
        while (temp != null) {
            count++; 
            temp = temp.nextNode; 
        }
        return count; 
    }

    head() {
        return this.listHead; 
    }

    tail() {
        let temp = this.listHead; 
        while(temp.nextNode != null) temp = temp.nextNode; 
        return temp; 
    }

    at(idx) {
        let temp = this.listHead; 
        for (let i = 0; i < idx; i++){
            temp = temp.nextNode; 
            if(temp == null) return "No item here"; 
        }
        return temp; 
    }

    pop(){
        let curr = this.listHead; 
        let prev = null; 
        while(curr.nextNode != null){
            prev = curr; 
            curr = curr.nextNode; 
        }
        prev.nextNode = null; 
    }

    contains(val) {
        let temp = this.listHead; 
        while(temp != null){
            if(temp.value === val)return true; 
        }
        return false; 
    }

    find(val) {
        let temp = this.listHead; 
        let idx = 0; 
        while(temp != null){
            if(temp.value === val) return idx; 
            temp = temp.nextNode; 
            idx++; 
        }
        return null; 
    }

    toString() {
        let temp = this.listHead;
        let stringList = "";
        while (temp != null) {
          stringList += `(${temp.value}) -> `;
          temp = temp.nextNode;
        }
        return (stringList += "null");
    }

    insertAt(val, idx) {
        if (this.listHead == null) this.prepend(val);
        else {
          let curr = this.listHead;
          let prev = null;
          for (let i = 0; i < idx; i++) {
            prev = curr;
            curr = curr.nextNode;
            if (curr == null) break; // if index is bigger than end of list, add node at end of list
          }
          const temp = new Node(val);
          prev.nextNode = temp;
          temp.nextNode = curr;
        }
      }

      removeAt(idx) {
        if (this.listHead == null) return "List is already empty";
    
        let curr = this.listHead;
        let prev = null;
        for (let i = 0; i < idx; i++) {
          prev = curr;
          curr = curr.nextNode;
          if (curr == null) return "There is no item for this index";
        }
        prev.nextNode = curr.nextNode;
      }
}