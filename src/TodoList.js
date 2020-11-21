
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm';
import useTodos from './useTodos';

const TodoList = () => {
  const {todos, handleSave, toggleState} = useTodos();

  return (<div>
    <TodoForm onSave={handleSave} />

    {todos.map((todo) => {
      return (
        <TodoListItem todo={todo} toggleState={toggleState} key={todo.id} />
      )
    })}
  </div>);
}

export default TodoList;