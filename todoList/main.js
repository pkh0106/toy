let addBtn = document.querySelector('.addBtn');
let addTxt = document.querySelector('.addTxt');
let allNum = document.querySelector('.allValue');
let contiNum = document.querySelector('.contiValue');
let endNum = document.querySelector('.endValue');
let itemList = document.querySelector('.items');
let itemAll = document.querySelectorAll('.item');
let delBtns = document.querySelectorAll('.delBtn')
let editBtns = document.querySelectorAll('.editBtn');
let doneBtns = document.querySelectorAll('.doneBtn');
let itemContents = document.querySelectorAll('.itemContent');

/* 목록 추가 */
addBtn.addEventListener('click', () => {
    if(addTxt.value === ""){
        alert('할 일을 입력해주세요!');
    }
    else{
        let list = document.createElement('li');
        list.setAttribute("class", "item");
        list.innerHTML = `
            <input type="checkbox" name="done" id="done" class="doneBtn">
            <span class="itemContent">${addTxt.value}</span>
            <button class="editBtn"><i class="fa-solid fa-pencil"></i></button>
            <button class="delBtn"><i class="fa-solid fa-trash"></i></button>
        `;

        itemList.appendChild(list);
        checkCount();
        addTxt.value = '';

        deleteItem();
        editItem();
        doneItem();
    }
})


function deleteItem() {
    delBtns = document.querySelectorAll('.delBtn')
    listEls = document.querySelectorAll('.item')

    delBtns.forEach((delBtn, index) => delBtn.addEventListener('click', () => {
        listEls[index].remove();
        checkCount();
    }))

}

function editItem() {
    editBtns = document.querySelectorAll('.editBtn');
    itemContents = document.querySelectorAll('.itemContent');

    editBtns.forEach((editBtn, index) => editBtn.addEventListener('click', () => {
        let newText = prompt("입력하세요");
        itemContents[index].innerHTML = newText;
    }))
}

function doneItem() {
    doneBtns = document.querySelectorAll('.doneBtn');
    let listdone = document.querySelectorAll('.item');

    doneBtns.forEach((doneBtn, index) => doneBtn.addEventListener('click', () => {
        if(doneBtn.checked == true){
            listdone[index].style.textDecoration = "line-through";
            editBtns[index].style.display = "none";
        }
        else {
            listdone[index].style.textDecoration = "none";
            editBtns[index].style.display = "";
        }
        checkCount();
    }))
}

function checkCount() {
    let contiCount = 0;
    let endCount = 0;

    itemAll = document.querySelectorAll('.item');
    doneBtns = document.querySelectorAll('.doneBtn');

    for (let i = 0; i < itemAll.length; i++) {
        if(doneBtns[i].checked == true){
            endCount++;
        }
        else{
            contiCount++;
        }
    }

    let allCount = endCount + contiCount;

    allNum.innerHTML = allCount;
    contiNum.innerHTML = contiCount;
    endNum.innerHTML = endCount;
}
