// Write your Task 1 code inside this function!
function task1() {
  console.log("Running task 1");
  //Target div and set inner text to something new.
  let target = document.querySelector("#text-content")
  console.log(target)
  target.innerText = "something new"
}

// Write your task 2 code inside this function!
function task2() {
  console.log("Running task 2");
  let target = document.querySelector("#task2")
  target.classList.toggle("why")
}

// Write your task 3 code inside this function!
function task3() {
  console.log("Running task 3");
  var node = document.createElement("LI");
  var textnode = document.createTextNode("Water");
  node.appendChild(textnode);
  document.getElementById("list").appendChild(node);
}
