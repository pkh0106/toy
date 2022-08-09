import { useState } from "react";

function ConditionBtns(props) {
  function Button(props) {
    return (
      <button>
        <div>{props.title}</div>
        <span>{props.value}</span>
      </button>
    );
  }

  return (
    <div>
      <Button title="전체" value={props.all}></Button>
      <Button title="진행 중" value={props.conti}></Button>
      <Button title="완료" value={props.end}></Button>
    </div>
  );
}

export default ConditionBtns;
