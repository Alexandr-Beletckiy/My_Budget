// window.onload = init;  //Загрузаеться страница и во время загрузки вызываеться функция

let incom = [], // Создаем два массива Плюс и Минус
    expenses = [];

<<<<<<< HEAD
<<<<<<< HEAD
function init(){    
  let plus = [], // Создаем два массива Плюс и Минус
      minus = [];
    plus.push(localStorage.getItem('plus')); //Записываем данные из хранилища
    minus.push(localStorage.getItem('minus'));
    let button = document.getElementById("addButton")
    button.onclick = handleButtonClick;

    incom = plus;
    expenses = minus;
  console.log("plus", plus); //Проверяем
  console.log("minus", minus);
=======
function addLocal () {
  let localValue = localStorage.getItem(incom);
  console.log(localValue); //"myValue"
  console.log(incom);
=======
function addLocal () {
  let localValue = localStorage.getItem(incom);
  console.log(localValue); //"myValue"
  console.log(incom);
}

function init(){
    let button = document.getElementById("addButton")
    button.onclick = handleButtonClick;
>>>>>>> parent of 9891254... 12.03.2019
}

function init(){
    let button = document.getElementById("addButton")
    button.onclick = handleButtonClick;
>>>>>>> parent of 9891254... 12.03.2019
}

init();
//Действия при загрузке закончены

    incom.slice()
console.log("incom", incom);
console.log("expenses", expenses);
//Создаем функцию нажатия кнопки
function handleButtonClick() {
  let textInput = document.getElementById("NameInput"),
      a = textInput.value,
      select = document.getElementById("selectInput"),
      b = selectInput.value;

  if (b == "plus") {
<<<<<<< HEAD
<<<<<<< HEAD
    exec(incom, )
    // incom.push(a,);
    // let c = document.getElementById("incom").firstElementChild,
    //     htmlCode = "<li>"+"+"+a+"</li>";
    // c.insertAdjacentHTML('afterBegin',htmlCode);

    // localStorage.setItem(b,incom);
=======
=======
>>>>>>> parent of 9891254... 12.03.2019
    incom.push(a);
    let c = document.getElementById("incom").firstElementChild,
        htmlCode = "<li>"+a+"</li>";
    c.insertAdjacentHTML('afterBegin',htmlCode);
    localStorage.setItem(b,incom);
>>>>>>> parent of 9891254... 12.03.2019
  }
  else {
    expenses.push(a);
    let d = document.getElementById("expenses").firstElementChild,
        htmlCode1 = "<li>"+a+"</li>";
    d.insertAdjacentHTML('afterBegin',htmlCode1);
    localStorage.setItem(b,expenses);
  }
<<<<<<< HEAD
<<<<<<< HEAD
};

function exec(mass, elem, val, flag) {
  let d = document.getElementById(flag).firstElementChild,
  mass.push(val);
  htmlCode = "<li>"+"+"+val+"</li>";

  elem.insertAdjacentHTML('afterBegin', htmlCode1);
  localStorage.setItem(flag, mass);
} 
=======
  addLocal ();
  };
  
>>>>>>> parent of 9891254... 12.03.2019
=======
  addLocal ();
  };
  
>>>>>>> parent of 9891254... 12.03.2019
