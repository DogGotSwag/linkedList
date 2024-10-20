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
    return new Node(this.#head.data,null);
  }
  tail(){
    return new Node(this.#tail.data,null);
  }
}

export default LinkedList;
