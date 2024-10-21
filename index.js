import LinkedList from "./LinkedList.js";

let list = new LinkedList();
list.append("D");
list.append("I");
// list.append("D");
// list.append("I");
// list.append("E");
// list.append("R");

list.removeAt(0);

console.log(list.toString());
