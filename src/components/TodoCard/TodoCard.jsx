import { Fragment } from 'react';
import styles from './TodoCard.module.css';

export default function TodoCard({ children }) {
    return (
        <Fragment>
            <div className={styles.card4x5}>{children}</div>
        </Fragment>
    );
}
