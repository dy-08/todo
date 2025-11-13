import { useState } from 'react';
import styles from './TodoList.module.css';
import { AiOutlineDelete } from 'react-icons/ai';

export default function TodoList() {
    const [todos, setTodos] = useState(['React 강의 듣기', 'PostCSS 사용해보기', '학원가기']);
    const handleDeleteTodo = (index) => {
        const idx = todos.findIndex((todo, i) => i === index);
        setTodos((prev) => {
            return prev.filter((todo, index) => index !== idx);
        });
    };
    console.log('todos:', todos);
    return (
        <ul className={styles.todoList}>
            {todos.map((todo, index) => (
                <li key={index}>
                    <input className={styles.input} type='checkbox' id={`todo${index}`} />
                    <label htmlFor={`todo${index}`}>{todo}</label>
                    <span className={styles.iconDelete} onClick={() => handleDeleteTodo(index)}>
                        <AiOutlineDelete />
                    </span>
                </li>
            ))}
        </ul>
    );
}
