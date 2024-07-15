
import './index.css';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    setItems([])
  }
  return (
    <div className="app">
    <Logo/>
    <Form onAddItems={handleAddItems}/>
    <PackedList items={items}
    onClearList={handleClearList}
    onDeleteItem={handleDeleteItem}
    onToggleItem={handleToggleItem}/>
    <Footer  items={items}/>
    </div>
  );
}

function Logo() {
  return (
    <h1>🏝️ Far Away 🧳</h1>
  )
}

function Form({onAddItems}) {
  const [description, SetDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    SetDescription("");
    setQuantity(1);
  }
  
  return(
    <form className='add-form' onSubmit={handleSubmit}>
    <h3>What do you need for your 😍 trip?
    </h3>
    <select
      value={quantity} onChange={(e) =>setQuantity(Number(e.target.value))}>
    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
      <option value={num} key={num} >
        {num}
      </option>
    ))}
  </select>
  <input
   placeholder='item..'
    value={description}
     onChange={(e) => SetDescription(e.target.value)}/>
  <button>Add</button>
    </form>
  )
}

function Item({item, onDeleteItem, onToggleItem}) {
  return(
    <li>
    <input
      type="checkbox"
      value={item.packed}
      onChange={() => onToggleItem(item.id)}
    />
    <span style={item.packed ? { textDecoration: "line-through" } : {}}>
      {item.quantity} {item.description}
    </span>
    <button onClick={() => onDeleteItem(item.id)}>❌</button>
  </li>
  )
}

function PackedList({items, onClearList, onDeleteItem, onToggleItem}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className='list'>
    <ul>
    {sortedItems.map((item) => (
         <Item key={item.id} item={item}   onDeleteItem={onDeleteItem}
         onToggleItem={onToggleItem}/>
        
    ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  )
}

function Footer({ items }) {
  return (
    <>
    <footer className='stats'>
    {`💼 You have ${ items.length } items on your list, and you already packed 0 (0%)`}
    </footer>
    </>
  )
}

export default App;
