import styles from './TodoList.module.css';
import { AiOutlineDelete } from 'react-icons/ai';

export default function TodoList({
  todos,
  setTodos,
  setChecked,
  checked,
  state,
}) {
  console.log(checked);
  const handleDeleteTodo = (todoToDelete) => {
    setTodos((prev) => prev.filter((todo) => todo !== todoToDelete));
    setChecked((prev) => prev.filter((item) => item !== todoToDelete));
  };
  const handleChecked = (e, todo) => {
    console.log('todo:', todo);
    if (e.target.checked) {
      setChecked((prev) => [...prev, todo]);
    } else {
      setChecked((prev) => prev.filter((item) => item !== todo));
    }
  };
  const renderTodos = () => {
    switch (state) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((item) => !checked.includes(item));
      case 'completed':
        return todos.filter((item) => checked.includes(item));
      default:
        return todos;
    }
  };
  const filteredTodos = renderTodos();
  return (
    <ul className={styles.todoList}>
      {filteredTodos.map((todo, index) => (
        <li
          key={index}
          style={
            checked.includes(todo) ? { textDecoration: 'line-through' } : {}
          }
        >
          <input
            className={styles.input}
            type='checkbox'
            id={`todo${index}`}
            onChange={(e) => handleChecked(e, todo)}
            checked={checked.includes(todo)}
          />
          <label htmlFor={`todo${index}`}>{todo}</label>
          <span
            className={styles.iconDelete}
            onClick={() => handleDeleteTodo(todo)}
          >
            <AiOutlineDelete />
          </span>
        </li>
      ))}
    </ul>
  );
}
