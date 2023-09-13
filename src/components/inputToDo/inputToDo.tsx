import styles from './inputToDo.module.css';
import {  HTMLProps, useRef } from 'react';

export const InputToDo = ({ defaultValue, value, onChange, onKeyDown, ref }: HTMLProps<HTMLInputElement>) => {
  //const ref = useRef<HTMLInputElement>(null);
  return (
    <input type="text"
      placeholder='Введите задачу'
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
      className={styles.input}
      ref={ref}
      defaultValue={defaultValue}/>
  )
}