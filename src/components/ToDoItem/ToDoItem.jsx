import "./ToDoItem.css";

export function ToDoItem() {
  return (
    <div className="to-do-item">
      <input type="checkbox" />
      <p>Item</p>
      <img
        src="https://www.flaticon.com/svg/vstatic/svg/2496/2496733.svg?token=exp=1618938215~hmac=f2a28c5a10666b96b08bcbef0548421d"
        alt="trash can"
      />
    </div>
  );
}
