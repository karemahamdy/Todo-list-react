
import './index.css';

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
  return(
    <form className='add-form'>
    <h3>What do you need for your 😍 trip?
    </h3>
    <select
    value={0} >
    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
      <option value={num} key={num}>
        {num}
      </option>
    ))}
  </select>
  <input placeholder='item..'></input>
  <button>Add</button>
    </form>
  )
}

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
