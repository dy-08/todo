import styles from './TodoSearch.module.css';
import { useState } from 'react';

export default function TodoSearch({ setTodos }) {
    const [form, setForm] = useState('');
    const handleChange = (e) => {
        const { value } = e.target;
        setForm(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos((prev) => [...prev, form]);
        setForm('');
    };
    return (
        <form className={styles.todoSearch} onSubmit={handleSubmit}>
            <div className={styles.searchWrap}>
                <input className={styles.input} onChange={handleChange} value={form} type='text' />
                <button className={styles.button}>Add</button>
            </div>
        </form>
    );
}
