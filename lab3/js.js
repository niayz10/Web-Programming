
let box = document.querySelector('.box');
let todo_input = document.querySelector('#in1');


function addItem(){  
    let div=document.createElement('div');
    let item = document.createElement('input');
    let item2 = document.createElement('label');
    let item3=document.createElement('img');
    item3.onclick=function(){
      let result=confirm();
      if(result)
        div.remove();
    };
    item3.id="del";
    div.appendChild(item);
    div.appendChild(item2);
    div.appendChild(item3);
    div.id="div";
    div.style.borderColor="rgb(157,157,157)";
    div.style.height="40px";
    item.type="checkbox";
    item.id = "asd";
    item.style.position="relative";
    item.style.top="10px";
    item2.style.position="relative";
    item2.style.left="30px";
    item2.style.top="-10px";
    item.style.display="grid";
    box.style.visibility="visible";
    item3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCEZi5RM9OxlV-KOKModNC0w9oqjdPVM1qzVced9SXj4xnM_a0"
    item3.style.height="30px";
    item3.style.position='absolute';
    item3.style.left="617px";
    item3.style.top="4px";
    if(todo_input.value != ''){
      item2.innerHTML = todo_input.value;
     box.appendChild(div);
  }
  else{
    alert("write something");
  }
  todo_input.value="";
}
