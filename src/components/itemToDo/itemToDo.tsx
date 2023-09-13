import { Button } from '../button/button';
import styles from './itemToDo.module.css';
import { uuid } from 'uuidv4';
import {HTMLProps, useState, ChangeEvent, useRef} from 'react'
import { TTask } from '../../services/types/data';
import { InputToDo } from '../inputToDo/inputToDo';
import { useSelector, useDispatch } from '../../services/hooks';
import { UpdateTask } from '../../services/actions/taskActions';

type TProps = {
  task: TTask;
  updateTask: () => void;
  removeTask: () => void;
}

type Props = TProps & HTMLProps<HTMLInputElement>;

export const ItemToDo = ({
  task,
  updateTask,
  removeTask,
  value,
  ref
}:Props) => {

  const [inputUpdateTask, setInputUpdateTask] = useState('');
  const dispatch = useDispatch();
  const onChangeInputUpdateTask = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setInputUpdateTask(e.target.value)
    console.log(e.target.value)
  }
  const inputText = useRef<HTMLInputElement>(null);

  const completeTask = (id: string) => {
    const itemText = inputText?.current?.value?.trim() || '';
    if (itemText !== '') {
      dispatch(UpdateTask(id, itemText))
    console.log(itemText)
    }

  }
  return (
    <li className={styles.listContainer}>
      {!task.editing ? (
      <>
      <div className={styles.taskContainer}>
        <div>{task.text}</div>
      </div>
      <div className={styles.btnContainer}>
        <Button onClick={updateTask} text='Редактировать'/>
        <Button onClick={removeTask} text='Удалить'/>
        <Button onClick={()=>console.log('done')} text='Выполнена'/>
      </div>
      </>) : (
        <>
        <div className={styles.taskContainer}>
        {/* <InputToDo ref={inputText} defaultValue={task.text} onChange={onChangeInputUpdateTask} /> */}
        <input ref={inputText} defaultValue={task.text} onChange={onChangeInputUpdateTask}/>
      </div>
      <div className={styles.btnContainer}>
        <Button onClick={updateTask} text='Редактировать'/>
        <Button onClick={removeTask} text='Удалить'/>
        <Button onClick={()=>console.log('done')} text='Выполнена'/>
        <Button onClick={()=>completeTask(task.id)} text='Сохранить'/>
      </div>
      </>
      )}

    </li>
  )
}