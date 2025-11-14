import styles from './TodoHeader.module.css';
import { IoMdMoon } from 'react-icons/io';

export default function TodoHeader({ state, setState }) {
  const handleClick = (e) => {
    switch (e.target.dataset.state) {
      case 'all':
        return setState('all');
      case 'active':
        return setState('active');
      case 'completed':
        return setState('completed');
      default:
        return;
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <p className={styles.appName}>Todos</p>
        <a className={styles.darkMode}>
          <IoMdMoon size='1.1rem' />
        </a>
      </div>
      <div className={styles.bottom}>
        <button
          onClick={handleClick}
          className={state === 'all' ? styles.selected : ''}
          data-state='all'
        >
          All
        </button>
        <button
          onClick={handleClick}
          data-state='active'
          className={state === 'active' ? styles.selected : ''}
        >
          Active
        </button>
        <button
          onClick={handleClick}
          data-state='completed'
          className={state === 'completed' ? styles.selected : ''}
        >
          Completed
        </button>
      </div>
    </header>
  );
}
