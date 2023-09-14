
import { Todo } from '../page/todo';
import styles from './app.module.css';
import { useEffect } from 'react';

export const App = () => {
  return (
    <section className={styles.page}>
      <h1 className={styles.title}>My ToDo</h1>
          <Todo />
    </section>
  )
}