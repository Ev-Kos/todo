import { Button } from '../button/button';
import styles from './itemToDo.module.css';
import { uuid } from 'uuidv4';
import {HTMLProps} from 'react'
import { TTask } from '../../services/types/data';

type TProps = {
  // number: number;
  task: TTask;
  updateTask: () => void;
  removeTask: () => void;
}

export const ItemToDo = ({ task, updateTask, removeTask}:TProps) => {
  const update = () => {
    console.log('update')
  }
  const remove = () => {
    console.log('delete')
  }
  const complite = () => {
    console.log('complite')
  }

  return (
    <li className={styles.listContainer}>
      <div className={styles.taskContainer}>
        {/* <div>{number}</div> */}
        <div>{task.text}</div>
      </div>
      <div className={styles.btnContainer}>
        <Button onClick={updateTask} text='Редактировать'/>
        <Button onClick={removeTask} text='Удалить'/>
        <Button onClick={complite} text='Выполнена'/>
      </div>
    </li>
  )
}