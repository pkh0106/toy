import { BsCardChecklist } from "react-icons/bs";

function Header() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "8px " }}>
        <BsCardChecklist />
      </div>
      <div>todo_List</div>
    </div>
  );
}

export default Header;
