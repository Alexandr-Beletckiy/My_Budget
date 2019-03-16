window.onload = init;

const INC_STORAGE_NAME = 'incomes';
const EXP_STORAGE_NAME = 'expenses';
const INC_ID = 'js_incomes';
const EXP_ID = 'js_expenses';

let locStorageInc = localStorage.getItem(INC_STORAGE_NAME),
    locStorageExp = localStorage.getItem(EXP_STORAGE_NAME),
    incomesArr = locStorageInc ? locStorageInc.split(',') : [],
    expensesArr = locStorageExp ? locStorageExp.split(',') : [];

function init() {
    itemsToDisplay(INC_ID, incomesArr);
    itemsToDisplay(EXP_ID, expensesArr);

    let addButton = document.getElementById("addButton");
    addButton.onclick = handleClick;
}

function handleClick() {
    let operatorElem = document.getElementById("js_operator"),
        operator = operatorElem.value,
        valElem = document.getElementById("js_input_val"),
        value = valElem.value;

    if (!checkValue(value)) {
        alert('Используйте только цифры.');
        valElem.value = '';

        return;
    }

    switch (operator) {
        case '+':
            incomesArr.push(value);
            appendHtml(INC_ID, value);
            addToLocalStorage(INC_STORAGE_NAME, incomesArr);
            break;
        case '-' :
            expensesArr.push(value);
            appendHtml(EXP_ID, value);
            addToLocalStorage(EXP_STORAGE_NAME, expensesArr);
            break;
    }
}

function itemsToDisplay(elemId, itemsArr) {
    itemsArr.forEach(function (value) {
        appendHtml(elemId, value)
    });
}

function appendHtml(elemId, val) {
    let html = "<li>" + val + "</li>";
    let element = document.getElementById(elemId);

    element.insertAdjacentHTML('afterbegin', html);
}

function addToLocalStorage(elemName, item) {
    localStorage.setItem(elemName, item);
}

function checkValue(val) {
    let reg = new RegExp('^\\d+$');

    return reg.test(val);
}
