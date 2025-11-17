import { useContext } from 'react';
import styles from './TodoHeader.module.css';
import { IoMdMoon } from 'react-icons/io';
import { ThemeContext } from '../../context/ThemeContext';

export default function TodoHeader({ state, setState }) {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

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
        <a className={styles.darkMode} onClick={toggleTheme}>
          <IoMdMoon size='1.1rem' />
        </a>
      </div>
      <div className={styles.bottom}>
        <button
          onClick={handleClick}
          className={`${state === 'all' ? styles.selected : ''} ${
            isDark ? styles.dark : ''
          }`}
          data-state='all'
        >
          All
        </button>
        <button
          onClick={handleClick}
          data-state='active'
          className={`${state === 'active' ? styles.selected : ''} ${
            isDark ? styles.dark : ''
          }`}
        >
          Active
        </button>
        <button
          onClick={handleClick}
          data-state='completed'
          className={`${state === 'completed' ? styles.selected : ''} ${
            isDark ? styles.dark : ''
          }`}
        >
          Completed
        </button>
      </div>
    </header>
  );
}
