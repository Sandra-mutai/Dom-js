document.body.style.backgroundColor = "silver";

document.getElementById("title").style.color = "green";
document.getElementById("header").style.textTransform = "uppercase";
document.getElementById("headers").style.textTransform = "uppercase";

var list = document.createElement("li");
var fruit = document.createTextNode("Apple");
list.appendChild(fruit);
document.getElementById("fruList").appendChild(list);

var node = document.createElement("kiwi");
var textNode = document.createTextNode("Avocado");
node.appendChild(textNode);
document.getElementById("vegList").appendChild(node);