import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    const addItem = (item) => {
      // Logic to add item
      console.log("Item added:", item);
    };

    const viewItem = (id) => {
      // Logic to view item
      console.log("View item with id:", id);
    };

    const deleteItem = (id) => {
      // Logic to delete item
      console.log("Item deleted with id:", id);
    };

    // Example usage
    addItem({ id: 1, name: "Sample Item" });
    viewItem(1);
    deleteItem(1);
    </>
  )
}

export default App
