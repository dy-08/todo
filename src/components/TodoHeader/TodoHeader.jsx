import styles from './TodoHeader.module.css';
import { IoMdMoon } from 'react-icons/io';

export default function TodoHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.top}>
                <p className={styles.appName}>Todos</p>
                <a className={styles.darkMode}>
                    <IoMdMoon size='1.1rem' />
                </a>
            </div>
            <div className={styles.bottom}>
                <button className={styles.selected}>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </header>
    );
}
