import styles from './TodoSearch.module.css';

export default function TodoSearch() {
    return (
        <form className={styles.todoSearch}>
            <div className={styles.searchWrap}>
                <input className={styles.input} type='text' />
                <button className={styles.button} type='submit'>
                    Add
                </button>
            </div>
        </form>
    );
}
