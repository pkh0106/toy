function InsertTap(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        name="newContext"
        placeholder="todo를 입력하세요😶"
      ></input>
      <input type="submit" value="ADD"></input>
    </form>
  );
}

export default InsertTap;
