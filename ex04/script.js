function task1() {
  let myArray = ["hi", "hidouble", "hitriple"];
  let target = document.querySelector("#task-1-target")
  // This will run when you click the button.
  myArray.forEach((item) => {
    let el = document.createElement("p");
    el.innerText = item;
    target.appendChild(el);
  });
}

function task2A() {
  // Write your code in here
  let colors = document.querySelectorAll("#color-list > li")

  // for each item in `names`, take the item (name) and then log it in the console
  colors.forEach(color => {
    console.log(color)
  })
}

function task2B() {
  // Writ your code in here
  let names = document.querySelectorAll("#name-list > li")
let target = document.querySelector("#name-list")

console.log(names)

names.forEach(item => {
    let newEL = document.createElement("li")
    newEL.innerText = "Hi " + item.innerText;
    newEL.style.fontWeight = 800;
    target.appendChild(newEL)
})
}

function task3() {
  // Write your code in here
  let txt = document.querySelectorAll(".item > p");

  txt.forEach(item => {
    item.style.backgroundColor = "#" + item.innerText;
  });
}
