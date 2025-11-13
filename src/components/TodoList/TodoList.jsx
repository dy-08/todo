import { useState } from 'react';
import styles from './TodoList.module.css';
import { AiOutlineDelete } from 'react-icons/ai';

export default function TodoList({ todos, setTodos }) {
    const handleDeleteTodo = (index) => {
        const idx = todos.findIndex((todo, i) => i === index);
        setTodos((prev) => {
            return prev.filter((todo, index) => index !== idx);
        });
    };
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
