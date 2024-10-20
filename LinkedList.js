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
      this.#head = new Node(value,this.#head);
    }
  }

  head() {
    return this.#head;
  }
}

export default LinkedList;
