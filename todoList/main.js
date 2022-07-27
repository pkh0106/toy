let addBtn = document.querySelector(".addBtn");
let addTxt = document.querySelector(".addTxt");
let allNum = document.querySelector(".allValue");
let contiNum = document.querySelector(".contiValue");
let endNum = document.querySelector(".endValue");
let allBtn = document.querySelector(".all");
let contiBtn = document.querySelector(".continue");
let endBtn = document.querySelector(".end");
let itemList = document.querySelector(".items");

let itemAll, doneBtns, editBtns, delBtns;

let index = 0;

/* 목록 추가 */
addBtn.addEventListener("click", () => {
  if (addTxt.value === "") {
    alert("할 일을 입력해주세요!");
  } else {
    //목록 생성
    let list = document.createElement("li");
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

    itemAll = document.querySelectorAll(".item");
    doneBtns = document.querySelectorAll(".doneBtn");
    editBtns = document.querySelectorAll(".editBtn");
    delBtns = document.querySelectorAll(".delBtn");

    checkCount();
    addTxt.value = "";
    index++;

    //event
    deleteItem();
    doneItem();
    newEBtn.addEventListener("click", () => {
      editItem(newEBtn.id);
    });
  }
});

function deleteItem() {
  delBtns.forEach((delBtn) =>
    delBtn.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const node = e.target.parentNode.parentNode;
      node.remove();
      itemAll = document.querySelectorAll(".item");
      checkCount();
    })
  );
}

function editItem(name) {
  let itemContents = document.querySelectorAll(".itemContent");
  let newText = prompt("입력하세요");
  itemContents[name].innerHTML = newText;
}

function doneItem() {
  let listdone = document.querySelectorAll(".item");

  doneBtns.forEach((doneBtn, index) =>
    doneBtn.addEventListener("click", () => {
      if (doneBtn.checked) {
        listdone[index].style.textDecoration = "line-through";
        editBtns[index].style.display = "none";
      } else {
        listdone[index].style.textDecoration = "none";
        editBtns[index].style.display = "";
      }
      checkCount();
    })
  );
}

//개수 수정
function checkCount() {
  let contiCount = 0;

  for (let i = 0; i < itemAll.length; i++) {
    if (!doneBtns[i].checked) {
      contiCount++;
    }
  }

  let endCount = itemAll.length - contiCount;

  allNum.innerHTML = itemAll.length;
  contiNum.innerHTML = contiCount;
  endNum.innerHTML = endCount;
}

//조회 가능

// 수정 부분 - (3)
const lookUpBtn = document.querySelectorAll(".all");

lookUpBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.lookup;
    itemAll.forEach((item, index) => {
      if (type === "all") {
        item.style.display = "";
      } else {
        doneBtns[index].checked
          ? (item.style.display = type === "continue" ? "none" : "")
          : (item.style.display = type === "continue" ? "" : "none");
      }
    });
  });
});
