/* A01039543 */

let post = document.getElementById("ButtonPost");
let clear = document.getElementById("ButtonClear");
let mark = document.getElementById("ButtonMark");
let del = document.getElementById("ButtonDelete");

post.addEventListener("click", TodoPost);
clear.addEventListener("click", TodoClear);
mark.addEventListener("click", TodoMark);
del.addEventListener("click", TodoDel);



function TodoPost(e) {
  e.preventDefault();

  var todo = document.getElementById("todoText").value;
  var list = document.getElementById("todoList");

  let currentList = list.innerHTML;
  list.innerHTML = currentList + `<input type = "checkbox" name="todo" />  ${todo}  <br>  `

}

function TodoClear(e) {
  e.preventDefault();

  var list = document.getElementById("todoList").childNodes;

  for (var i = 0; i < list.length; i++) {
    list[i].checked = false;
  }
}

function TodoMark(e) {
  e.preventDefault();

  var list = document.getElementById("todoList").childNodes;

  for (var i = 0; i < list.length; i++) {
    list[i].checked = true;
  }
}

function TodoDel(e) {
  e.preventDefault();

  var parent = document.getElementById("todoList");

  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
