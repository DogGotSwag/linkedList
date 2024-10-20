import Node from "./node.js";

class LinkedList {
  #head = null;
  #tail = null;
  constructor() {}

  append(value) {
    if (this.#head === null) {
      this.#head = new Node(value);
      this.#tail = new Node(value);
    }
    else{
      this.#tail = new Node(value);
    }    
  }
}

export default LinkedList;
