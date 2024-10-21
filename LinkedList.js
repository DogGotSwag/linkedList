import Node from "./node.js";

class LinkedList {
  #head = null;
  #tail = null;
  constructor() {}

  append(value) {
    if (this.#head === null) {
      this.#head = new Node(value);
      this.#tail = this.#head;
    } else {
      this.#tail.next = new Node(value);
      this.#tail = this.#tail.next;
    }
  }

  prepend(value) {
    if (this.#head === null) {
      this.#head = new Node(value);
      this.#tail = this.#head;
    } else {
      this.#head = new Node(value, this.#head);
    }
  }

  size() {
    let temp = this.#head;
    let size = 0;
    while (temp != null) {
      size += 1;
      temp = temp.next;
    }
    return size;
  }

  head() {
    return new Node(this.#head.data);
  }
  tail() {
    return new Node(this.#tail.data);
  }

  at(index) {
    try {
      let temp = this.#head;
      for (let i = 0; i < index; i++) {
        if (temp.next === null) {
          throw new Error("Out Of Bounds");
        }
        temp = temp.next;
      }
      return new Node(temp.data);
    } catch (e) {
      return `ERROR: ${e.message}`;
    }
  }

  pop(){
    if(this.#head === null) return null;
    let holder = this.#head;
    if(this.size() == 1) {
      this.#head = null;
      this.#tail = null;
      return holder
    }
    else{
      let curr = this.#head;
      let prev;
      while(curr.next != null){
        prev = curr;
        curr = curr.next
      }
      prev.next = null;
    }
  }
}

export default LinkedList;
