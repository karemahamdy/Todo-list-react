
import './index.css';
import { useState } from 'react';

function App() {
  return (
    <div className="app">
    <Logo/>
    <Form/>
    
    <PackedList/>
    <Footer/>
    </div>
  );
}

function Logo() {
  return (
    <h1>🏝️ Far Away 🧳</h1>
  )
}

function Form() {
  const [description, SetDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    
  }
  return(
    <form className='add-form' onClick={handleSubmit}>
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

// function Item() {
//   return(
//     <input
//     type="checkbox"
  
//   />
//   )
// }

function PackedList() {
  return (
    <div className='list'>
      <p>items</p>
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
