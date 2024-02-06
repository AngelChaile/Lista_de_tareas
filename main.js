const input = document.querySelector('input');
const btnAdd = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const msg = document.querySelector(".empty");


btnAdd.addEventListener("click", (e) =>{
  e.preventDefault();
  const tarea = input.value;
  
  if (tarea !== "") {
    
    const li = document.createElement("li");
    const p = document.createElement("p");
    
    p.textContent = tarea;
    
    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);
    
    input.value = "";
    msg.style.display = "none";
  }
})

function addDeleteBtn() {
  const btnDelete = document.createElement("button");

  btnDelete.textContent = "X";
  btnDelete.className = "btn-delete";

  btnDelete.addEventListener("click", (e) => {
    const item = e.target.parentElement;

    ul.removeChild(item);

    const items = document.querySelectorAll("li");
    if (items.length == 0) {
      msg.style.display = "block";
    }
  })
  return btnDelete;
}