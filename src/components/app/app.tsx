
import { Header } from '../header/header';
import { Todo } from '../page/todo';
import styles from './app.module.css';
import { useEffect } from 'react';

export const App = () => {
  return (
    <main className={styles.page}>
      <Header/>
          <Todo />
    </main>
  )
}