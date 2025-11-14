import { useState } from 'react';
import styles from './TodoCard.module.css';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoList from '../TodoList/TodoList';
import TodoSearch from '../TodoSearch/TodoSearch';

export default function TodoCard() {
  const [todos, setTodos] = useState(initailTodos);
  const [checked, setChecked] = useState([]);
  const [state, setState] = useState('all');
  return (
    <div className={styles.card4x5}>
      <TodoHeader state={state} setState={setState} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setChecked={setChecked}
        checked={checked}
        state={state}
      />
      <TodoSearch setTodos={setTodos} />
    </div>
  );
}

const initailTodos = ['React 강의 듣기', 'PostCSS 사용해보기', '학원가기'];
