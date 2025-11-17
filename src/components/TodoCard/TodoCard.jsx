import { useContext, useEffect, useState } from 'react';
import styles from './TodoCard.module.css';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoList from '../TodoList/TodoList';
import TodoSearch from '../TodoSearch/TodoSearch';
import { ThemeContext } from '../../context/ThemeContext';

export default function TodoCard() {
  const initialTodos = ['React 강의 듣기', 'PostCSS 사용해보기', '학원가기'];
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem('todos');
      return saved ? JSON.parse(saved) : initialTodos;
    } catch (e) {
      console.error('localStorage parse error', e);
      return initialTodos;
    }
  });
  const [checked, setChecked] = useState(() => {
    try {
      const saved = localStorage.getItem('checked');
      return saved ? JSON.parse(saved) : '';
    } catch (e) {
      console.error('localStorage parse error', e);
      return;
    }
  });
  const [state, setState] = useState('all');
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    localStorage.setItem('checked', JSON.stringify(checked));
  }, [checked]);
  return (
    <div className={isDark ? styles.darkCard4x5 : styles.card4x5}>
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
