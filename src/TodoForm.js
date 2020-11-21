import {useState} from 'react';

const TodoForm = ({onSave}) => {
  const [newTodo, setNewTodo] = useState({
    title: '',
    done: false
  });

  return (
  <>
    <h3>Neue Todo:</h3>
    <input type="text" value={newTodo.title} onChange={(e) => {
      const value = e.currentTarget.value;
      setNewTodo(prevTodo => ({...prevTodo, title: value}));
    }}/>
    <button onClick={() => {
      onSave(newTodo);
      setNewTodo({
        title: '',
        done: false
      })
    }}>OK</button>
  </>
  );
}

export default TodoForm;

