import { Button } from '../button/button';
import styles from './itemToDo.module.css';
import { uuid } from 'uuidv4';
import {HTMLProps, useState, ChangeEvent, useRef, useEffect, KeyboardEvent} from 'react'
import { TTask } from '../../services/types/data';
import { InputToDo } from '../inputToDo/inputToDo';
import { useSelector, useDispatch } from '../../services/hooks';
import { CancelEditeTask, CompletedTask, EditeTask, RemoveTask, UpdateTask } from '../../services/actions/taskActions';

type TProps = {
  task: TTask;
}

type Props = TProps & HTMLProps<HTMLInputElement>;

export const ItemToDo = ({
  task,
}:Props) => {

  const [inputUpdateTask, setInputUpdateTask] = useState(task.text);
  const dispatch = useDispatch();
  const onChangeInputUpdateTask = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setInputUpdateTask(e.target.value)
    console.log(e.target.value)
  }
  const inputText = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputText?.current?.focus()
  });


  const saveTask = (id: string) => {
    if (inputUpdateTask !== '') {
      dispatch(UpdateTask(id, inputUpdateTask))
    }
  }

  const removeTask = (id: string) => {
    dispatch(RemoveTask(id))
   }

   const updateTask = (id: string) => {
    dispatch(EditeTask(id))
   }

   const completedTask = (id: string) => {
    dispatch(CompletedTask(id))
   }

   const canceledEditingTask = (id: string) => {
    dispatch(CancelEditeTask(id))
    setInputUpdateTask(task.text)
   }

   const onKeyPressCanceledEditingTask = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Escape") {
      canceledEditingTask(task.id)
      console.log(1)
    }
  }

  return (
    <li className={styles.listContainer}>
      {!task.editing ? (
      <>
      <div className={styles.taskContainer}>
        <div className={task.completed? styles.taskTextCompleted : styles.taskText}>{task.text}</div>
      </div>
      <div className={styles.btnContainer}>
        <Button onClick={()=>updateTask(task.id)} disabled={false} text='Редактировать'/>
        <Button onClick={()=>removeTask(task.id)} disabled={false} text='Удалить'/>
        <Button onClick={()=>completedTask(task.id)} disabled={false} text='Выполнена'/>
      </div>
      </>) : (
        <>
        <div className={styles.taskContainer}>
        <InputToDo ref={inputText} value={inputUpdateTask} onKeyDown={onKeyPressCanceledEditingTask} onChange={onChangeInputUpdateTask} />
      </div>
      <div className={styles.btnContainer}>
        <Button onClick={()=>updateTask(task.id)} text='Редактировать' disabled={false}/>
        <Button onClick={()=>removeTask(task.id)} text='Удалить' disabled={false}/>
        <Button onClick={()=>completedTask(task.id)} text='Выполнена' disabled={false}/>
        <Button onClick={()=>saveTask(task.id)} text='Сохранить' disabled={false}/>
        <Button onClick={()=>canceledEditingTask(task.id)} text='Отмена' disabled={false}/>
      </div>
      </>
      )}

    </li>
  )
}