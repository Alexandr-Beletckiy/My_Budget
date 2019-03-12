window.onload = init;
let incom = [],
    expenses = [];

function init(){
    let button = document.getElementById("addButton")
    button.onclick = handleButtonClick;
    let localValueP = localStorage.getItem('plus');
    let localValueM = localStorage.getItem('minus');
  console.log(localValueP);
  console.log(localValueM); //"myValue"
  console.log(incom);
}

function handleButtonClick() {
  let textInput = document.getElementById("NameInput"),
      a = textInput.value,
      select = document.getElementById("selectInput"),
      b = selectInput.value;

  if (b == "plus") {
    incom.push(a, );
    let c = document.getElementById("incom").firstElementChild,
        htmlCode = "<li>"+"+"+a+"</li>";
    c.insertAdjacentHTML('afterBegin',htmlCode);

    localStorage.setItem(b,incom);
  }
  else {
    expenses.push(a);
    let d = document.getElementById("expenses").firstElementChild,
        htmlCode1 = "<li>"+"-"+a+"</li>";
    d.insertAdjacentHTML('afterBegin',htmlCode1);
    localStorage.setItem(b,expenses);
  }
};
