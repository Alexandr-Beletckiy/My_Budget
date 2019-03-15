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
        alert('Пожалуйста используйте только цифры.');
        valElem.value = '';

        return;
    }

    let elemId = '';
    let itemArr = [];

    switch (operator) {
        case '+':
            incomesArr.push(value);
            elemId = INC_ID;
            itemArr = incomesArr;
            break;
        case '-' :
            expensesArr.push(value);
            elemId = EXP_ID;
            itemArr = expensesArr;
            break;
        default:
            return;
    }

    addToLocalStorage(elemId, itemArr);
    appendHtml(elemId, value);
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

function addToLocalStorage(elemId, item) {
    let elemName = (elemId === INC_ID) ? INC_STORAGE_NAME : EXP_STORAGE_NAME;

    localStorage.setItem(elemName, item);
}

function checkValue(val) {
    let reg = new RegExp('^\\d+$');

    return reg.test(val);
}
