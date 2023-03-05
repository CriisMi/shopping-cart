import { useState } from "react";

function App(props) {
  const [cartItems, setCartItems] = useState([]);
  const setItemsCtr = props.setItems;

  let items = [
    { name: "Red" },
    { name: "Orange" },
    { name: "Yellow" },
    { name: "Green" },
    { name: "Blue" },
    { name: "Purple" },
  ];

  const onAddBtnClick = () => {
    setItemsCtr((itemsCtr) => itemsCtr + 1);
  };

  let listItems = items.map((item) => (
    <li key={item.id}>
      {item.name} <button onClick={onAddBtnClick}>Add</button>
    </li>
  ));

  return (
    <div>
      <h1>Home</h1>
      <ul>{listItems}</ul>
    </div>
  );
}

export default App;
