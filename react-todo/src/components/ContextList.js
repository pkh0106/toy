function contextList(props) {
  const lis = [];
  for (let i = 0; i < props.list.length; i++) {
    const t = props.list[i];
    lis.push(
      <li key={t.id}>
        <input type="checkbox" onChange={props.onDone} />
        <span>{t.context}</span>
        <button onClick={props.onEdit}>EDIT</button>
        <button onClick={props.onDelete}>DEL</button>
      </li>
    );
  }
  return (
    <nav>
      <ul>{lis}</ul>
    </nav>
  );
}

export default contextList;
