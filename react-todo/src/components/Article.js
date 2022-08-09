import { useState } from "react";
import InsertTap from "./InsertTap";
import ConditionBtns from "./ConditionBtns";
import ContextList from "./ContextList";

function Article() {
  const [all, setAll] = useState(0);
  const [conti, setConti] = useState(0);
  const [end, setEnd] = useState(0);
  const [nextId, setnextId] = useState(0);
  const [lists, setLists] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    const context = event.target.newContext.value;
    const newLists = [...lists];
    const newList = { id: nextId, context: context, done: false };
    newLists.push(newList);
    setLists(newLists);

    setnextId(nextId + 1);
    event.target.newContext.value = "";
    changeCondition();
  };

  const onDone = (event) => {
    const node = event.target.parentNode;
    node.childNodes[1].style.textDecoration = "line-through";
    node.childNodes[2].style.display = "none";
    event.target.disabled = "true";
    const newLists = [...lists];
    for (let i = 0; i < lists.length; i++) {
      if (node.childNodes[1].innerHTML === lists[i].context) {
        const updatedList = { id: i, context: lists[i].context, done: true };
        newLists[i] = updatedList;
        break;
      }
    }
    setLists(newLists);
    changeCondition();
  };

  const onEdit = (event) => {
    const newText = prompt("입력하세요");

    const editContext = event.target.previousSibling.innerHTML;
    const newLists = [...lists];
    for (let i = 0; i < lists.length; i++) {
      if (editContext === lists[i].context) {
        const updatedList = { id: i, context: newText, done: false };
        newLists[i] = updatedList;
        break;
      }
    }
    setLists(newLists);
  };

  const onDelete = (event) => {
    const deleteContext =
      event.target.previousSibling.previousSibling.innerHTML;
    const newLists = [];
    for (let i = 0; i < lists.length; i++) {
      if (deleteContext !== lists[i].context) {
        newLists.push(lists[i]);
      }
    }

    setLists(newLists);
    changeCondition();
  };

  const changeCondition = () => {
    let allValue = 0;
    let contiValue = 0;
    let endValue = 0;
    allValue = lists.length;
    for (let i = 0; i < lists.length; i++) {
      lists[i].done ? endValue++ : contiValue++;
    }

    setAll(allValue);
    setConti(contiValue);
    setEnd(endValue);
  };

  return (
    <article>
      <InsertTap onSubmit={onSubmit}></InsertTap>
      <ConditionBtns all={all} conti={conti} end={end}></ConditionBtns>
      <ContextList
        list={lists}
        onDone={onDone}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </article>
  );
}

export default Article;
