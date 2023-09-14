import styles from './header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>My ToDo List</h1>
    </div>

  )
}