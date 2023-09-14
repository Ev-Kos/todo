import styles from './inputToDo.module.css';
import {  HTMLProps, forwardRef } from 'react';

type Ref = HTMLInputElement

export const InputToDo = forwardRef<Ref, HTMLProps<HTMLInputElement>>(({ defaultValue, value, onChange, onKeyDown}, ref) => {
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
})