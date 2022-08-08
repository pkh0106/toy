import { useState } from "react";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

function Article() {
  const [all, setAll] = useState(0);
  const [conti, setConti] = useState(0);
  const [end, setEnd] = useState(0);
  const [nextId, setnextId] = useState(3);
  const [lists, setLists] = useState([]);

  function Button(props) {
    return (
      <button>
        <div>{props.title}</div>
        <span>{props.value}</span>
      </button>
    );
  }

  function List(props) {
    const lis = [];
    for (let i = 0; i < props.list.length; i++) {
      const t = props.list[i];
      lis.push(
        <li key={t.id}>
          <input type="checkbox" onChange={onDone} />
          <span>{t.context}</span>
          <button onClick={onEdit}>EDIT</button>
          <button onClick={onDelete}>DEL</button>
        </li>
      );
    }
    return (
      <nav>
        <ul>{lis}</ul>
      </nav>
    );
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const context = event.target.newContext.value;
    const newLists = [...lists];
    const newList = { id: nextId, context: context, done: false };
    newLists.push(newList);
    setLists(newLists);

    setAll(all + 1);
    setConti(conti + 1);
    setnextId(nextId + 1);
    event.target.newContext.value = "";
  };
  const onDone = (event) => {
    const node = event.target.parentNode;
    if (event.target.checked == true) {
      node.childNodes[1].style.textDecoration = "line-through";
      node.childNodes[2].style.display = "none";
      setConti(conti - 1);
      setEnd(end - 1);
    } else {
      node.childNodes[1].style.textDecoration = "none";
      node.childNodes[2].style.display = "";
    }
  };

  const onEdit = (event) => {
    const newText = prompt("입력하세요");

    const editContext = event.target.previousSibling.innerHTML;
    const newLists = [...lists];
    for (let i = 0; i < lists.length; i++) {
      if (editContext === lists[i].context) {
        const updatedList = { id: i, context: newText };
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
  };

  return (
    <article>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="newContext"
          placeholder="todo를 입력하세요😶"
        ></input>
        <input type="submit" value="ADD"></input>
      </form>
      <div>
        <Button title="전체" value={all}></Button>
        <Button title="진행 중" value={conti}></Button>
        <Button title="완료" value={end}></Button>
      </div>
      <List list={lists} />
    </article>
  );
}

export default Article;
