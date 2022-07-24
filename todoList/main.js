let addBtn = document.querySelector('.addBtn');
let addTxt = document.querySelector('.addTxt');
let allNum = document.querySelector('.allValue');
let contiNum = document.querySelector('.contiValue');
let endNum = document.querySelector('.endValue');
let allBtn = document.querySelector('.all');
let contiBtn = document.querySelector('.continue');
let endBtn = document.querySelector('.end');
let itemList = document.querySelector('.items');
let itemAll = document.querySelectorAll('.item');
let delBtns = document.querySelectorAll('.delBtn')
let editBtns = document.querySelectorAll('.editBtn');
let doneBtns = document.querySelectorAll('.doneBtn');
let itemContents = document.querySelectorAll('.itemContent');

let index = 0;
/* 목록 추가 */
addBtn.addEventListener('click', () => {
    if(addTxt.value === ""){
        alert('할 일을 입력해주세요!');
    }
    else{
        //목록 생성
        let list = document.createElement('li');
        list.setAttribute("class", "item");
        list.innerHTML = `
            <input type="checkbox" name="done" id="done" class="doneBtn">
            <span class="itemContent">${addTxt.value}</span>
            <button class="delBtn"><i class="fa-solid fa-trash"></i></button>
        `;
        //수정 버튼 추가
        itemList.appendChild(list);
        let newEBtn = document.createElement("button");
        newEBtn.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
        newEBtn.id = `${index}`;
        newEBtn.className = "editBtn";
        list.insertBefore(newEBtn, list.childNodes[4]);

        checkCount();
        addTxt.value = '';
        index++;

        //event
        deleteItem();
        doneItem();
        newEBtn.addEventListener('click', () => {
            editItem(newEBtn.id);
        })
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

function editItem(name) {
    let itemContents = document.querySelectorAll('.itemContent');
    let newText = prompt("입력하세요");
    itemContents[name].innerHTML = newText;
}

function doneItem() {
    editBtns = document.querySelectorAll('.editBtn');
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


//개수 수정
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



//조회 가능
allBtn.addEventListener('click', () => {
    itemAll = document.querySelectorAll('.item');
    doneBtns = document.querySelectorAll('.doneBtn');

    for (let i = 0; i < itemAll.length; i++) {
        itemAll[i].style.display = "";
    }
})

contiBtn.addEventListener('click', () => {
    itemAll = document.querySelectorAll('.item');
    doneBtns = document.querySelectorAll('.doneBtn');

    for (let i = 0; i < itemAll.length; i++) {
        if(doneBtns[i].checked == true){
            itemAll[i].style.display = "none";
        }
        else{
            itemAll[i].style.display = "";
        }
    }
})

endBtn.addEventListener('click', () => {
    itemAll = document.querySelectorAll('.item');
    doneBtns = document.querySelectorAll('.doneBtn');

    for (let i = 0; i < itemAll.length; i++) {
        if(doneBtns[i].checked == true){
            itemAll[i].style.display = "";
        }
        else{
            itemAll[i].style.display = "none";
        }
    }
})