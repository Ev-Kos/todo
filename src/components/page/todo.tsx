import { AddTask, EditeTask, RemoveTask, UpdateTask } from '../../services/actions/taskActions';
import { useDispatch, useSelector } from '../../services/hooks';
import { TTask } from '../../services/types/data';
import { Button } from '../button/button';
import { InputToDo} from '../inputToDo/inputToDo';
import { ItemToDo } from '../itemToDo/itemToDo';
import styles from './todo.module.css';
import { useState, ChangeEvent, KeyboardEvent, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Todo = () => {
  const tasks = useSelector((store) => store.taskReducer.data);
  const [inputNewTask, setInputNewTask] = useState('');

  const dispatch = useDispatch();

  const onChangeInputNewTask = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setInputNewTask(e.target.value)
  }



  const addTask = () => {
    dispatch(AddTask(inputNewTask));
    setInputNewTask('');
  }

  const onKeyPressInputNewTask = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      dispatch(AddTask(inputNewTask));
      setInputNewTask('');
    }
  }

   const updateTask = (id: string) => {
    dispatch(EditeTask(id))
   }

   const removeTask = (id: string) => {
    dispatch(RemoveTask(id))
   }



  return(
    <div className={styles.container}>
      <div className={styles.addContainer}>
        <InputToDo
        value={inputNewTask}
        onChange={onChangeInputNewTask}
        onKeyDown={onKeyPressInputNewTask}/>
        <Button onClick={addTask} text='Добавить задачу'/>
      </div>
      <ul className={styles.listContainer}>
        {tasks && tasks.map((item, index) =>
        <ItemToDo task={item}
          key={item.id}
          updateTask={() => updateTask(item.id)}
          removeTask={()=>removeTask(item.id)}
          // completedTask={()=>completedTask(item.id, item.text)}
          />
        )}

      </ul>

    </div>

  )
}