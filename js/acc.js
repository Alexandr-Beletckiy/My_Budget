window.onload = init;
let incom = [],
    expenses = [];

function addLocal () {
  let localValue = localStorage.getItem(incom);
  console.log(localValue); //"myValue"
  console.log(incom);
}

function init(){
    let button = document.getElementById("addButton")
    button.onclick = handleButtonClick;
}

function handleButtonClick() {
  let textInput = document.getElementById("NameInput"),
      a = textInput.value,
      select = document.getElementById("selectInput"),
      b = selectInput.value;

  if (b == "plus") {
    incom.push(a);
    let c = document.getElementById("incom").firstElementChild,
        htmlCode = "<li>"+a+"</li>";
    c.insertAdjacentHTML('afterBegin',htmlCode);
    localStorage.setItem(b,incom);
  }
  else {
    expenses.push(a);
    let d = document.getElementById("expenses").firstElementChild,
        htmlCode1 = "<li>"+a+"</li>";
    d.insertAdjacentHTML('afterBegin',htmlCode1);
    localStorage.setItem(b,expenses);
  }
  addLocal ();
  };
  