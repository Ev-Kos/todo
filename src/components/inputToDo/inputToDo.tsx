import styles from './inputToDo.module.css';
import {  HTMLProps } from 'react';

export const InputToDo = ({ value, onChange, onKeyDown }: HTMLProps<HTMLInputElement>) => {
  return (
    <input type="text"
      placeholder='Введите задачу'
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
      className={styles.input}/>
  )
}