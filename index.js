import LinkedList from "./LinkedList.js";

let list = new LinkedList();
list.append("D");
list.append("I");
list.append("D");
list.append("I");
list.append("E");
list.append("R");

console.log(list.insertAt("Z",6));


for (let i = 0; i < list.size(); i++) {
  console.log(i+": "+list.at(i).data);
}
