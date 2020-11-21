import {useState, useEffect} from 'react';

const data = [
  {id: 1, title: 'get up', done: true},
  {id: 2, title: 'eat', done: true},
  {id: 3, title: 'code', done: false},
  {id:4, title: "sex, drugs, rock'n'roll, coding", done: false},
]

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTodos(data);
    }, 1000);
  }, []);
  
  function handleSave(todo) {
    const myBrandNewTodo = {
      ...todo,
      id: Math.max(...todos.map(t => t.id)) +1,
    }
    setTodos((prevState) => [...prevState, myBrandNewTodo]);
  }
  
  function toggleState(todo) {
    setTodos((prevState) => prevState.map(t => {
      if (t.id === todo.id) {
        return {...t, done: !t.done};
      }
      return t;
    }));
  }

  return {todos, handleSave, toggleState};
}
