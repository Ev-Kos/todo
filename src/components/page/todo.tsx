import { AddTask, RemoveTask } from '../../services/actions/taskActions';
import { useDispatch, useSelector } from '../../services/hooks';
import { TTask } from '../../services/types/data';
import { Button } from '../button/button';
import { InputToDo} from '../inputToDo/inputToDo';
import { ItemToDo } from '../itemToDo/itemToDo';
import styles from './todo.module.css';
import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Todo = () => {
  const tasks = useSelector((store) => store.taskReducer.data);
  const [inputState, setInputState] = useState('');
  const dispatch = useDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setInputState(e.target.value)
  }

  const addTask = () => {
    dispatch(AddTask(inputState));
    setInputState('');
  }

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      dispatch(AddTask(inputState));
      setInputState('');
    }
  }

   const updateTask = () => {
    console.log('update')
   }

   const removeTask = (id: string) => {
    dispatch(RemoveTask(id))
   }

  return(
    <div className={styles.container}>
      <div className={styles.addContainer}>
        <InputToDo
        value={inputState}
        onChange={onChange}
        onKeyDown={onKeyPress}/>
        <Button onClick={addTask} text='Добавить задачу'/>
      </div>
      <ul className={styles.listContainer}>
        {tasks && tasks.map((item, index) =>
        <ItemToDo task={item}
          key={item.id}
          updateTask={updateTask}
          removeTask={()=>removeTask(item.id)}/>
        )}

      </ul>

    </div>

  )
}