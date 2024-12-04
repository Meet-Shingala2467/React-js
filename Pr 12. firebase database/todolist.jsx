import { useEffect, useState } from 'react';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, writeBatch } from "firebase/firestore";
import { app } from './firebase';
import './todolist.css';

const db = getFirestore(app);

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const fetchTodos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "todos"));
      const todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ id: doc.id, ...doc.data() });
      });
      setTodos(todosArray);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async () => {
    if (newTodo.trim() === "") return;
    try {
      await addDoc(collection(db, "todos"), { text: newTodo });
      setNewTodo("");
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await deleteDoc(doc(db, "todos", id));
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const updateTodo = async (id, newText) => {
    if (newText.trim() === "") return;
    try {
      const todoDoc = doc(db, "todos", id);
      await updateDoc(todoDoc, { text: newText });
      fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const clearTodos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "todos"));
      const batch = writeBatch(db);
      querySnapshot.forEach((doc) => {
        batch.delete(doc.ref);
      });
      await batch.commit();
      setTodos([]);
    } catch (error) {
      console.error("Error clearing todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
        style={{ color: 'blue' }} // Change input text color to blue
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => updateTodo(todo.id, prompt("Update todo:", todo.text))}>Update</button>
          </li>
        ))}
      </ul>
      <button onClick={clearTodos}>Clear List</button>
    </div>
  );
}

export default TodoList;
