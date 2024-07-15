
import './index.css';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
    <Logo/>
    <Form onAddItems={handleAddItems}/>
    <PackedList items={items}/>
    <Footer/>
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

function Item({item}) {
  return(
    <li>
    <input
      type="checkbox"
      value={item}
      
    />
    <span style={item.packed ? { textDecoration: "line-through" } : {}}>
      {item.quantity} {item.description}
    </span>
    <button>❌</button>
  </li>
  )
}

function PackedList({items}) {
  return (
    <div className='list'>
    <ul>
    {items.map((item) => (
         <Item key={item.id} item={item} />
        
    ))}
      </ul>
      <div className="actions">
        <select>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button>Clear list</button>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <>
    <footer className='stats'>
    💼 You have 2 items on your list, and you already packed 0 (0%)
    </footer>
    </>
  )
}

export default App;
