import { Button } from '../button/button';
import styles from './itemToDo.module.css';
import {HTMLProps, useState, ChangeEvent, useRef, useEffect, KeyboardEvent} from 'react'
import { TTask } from '../../services/types/data';
import { InputToDo } from '../inputToDo/inputToDo';
import { CancelEditeTask, CompletedTask, EditeTask, RemoveTask, UpdateTask } from '../../services/actions/taskActions';
import { useDispatch } from '../../services/hooks';

type TProps = {
  task: TTask;
}

type Props = TProps & HTMLProps<HTMLInputElement>;

export const ItemToDo = ({ task }:Props) => {
  const [inputUpdateTask, setInputUpdateTask] = useState(task.text);
  const dispatch = useDispatch();
  const inputText = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputText?.current?.focus()
  });

  const onChangeInputUpdateTask = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setInputUpdateTask(e.target.value)
  }

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
    }
  }

  return (
    <li className={styles.listContainer}>
      {!task.editing ? (
      <>
        <div className={styles.taskContainer}>
          <span className={task.completed? styles.checkboxWrap : styles.checkboxWrapDis}>
            <InputToDo type='checkbox'
              onChange={()=>completedTask(task.id)}
              className={styles.checkbox}/>
          </span>
          <p className={task.completed? styles.taskTextCompleted : styles.taskText}>{task.text}</p>
        </div>
        <div className={styles.btnContainer}>
          <Button onClick={()=>updateTask(task.id)} className={styles.editButton}/>
          <Button onClick={()=>removeTask(task.id)} className={styles.deleteButton}/>
        </div>
      </>) : (
      <>
        <div className={styles.taskContainer}>
          <InputToDo className={styles.editInput}
            type='text' ref={inputText}
            value={inputUpdateTask}
            onKeyDown={onKeyPressCanceledEditingTask}
            onChange={onChangeInputUpdateTask} />
        </div>
        <div className={styles.btnContainer}>
          <Button onClick={()=>saveTask(task.id)} className={styles.saveButton}/>
          <Button onClick={()=>canceledEditingTask(task.id)} className={styles.cancelButton}/>
        </div>
      </>
      )}
    </li>
  )
}