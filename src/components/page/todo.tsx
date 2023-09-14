import { ShowActiveTask, ShowAllTask, ShowCompleteTask } from '../../services/actions/filterAction';
import { AddTask, EditeTask, RemoveTask, UpdateTask } from '../../services/actions/taskActions';
import { useDispatch, useSelector } from '../../services/hooks';
import { TTask } from '../../services/types/data';
import { Button } from '../button/button';
import { InputToDo} from '../inputToDo/inputToDo';
import { ItemToDo } from '../itemToDo/itemToDo';
import styles from './todo.module.css';
import { useState, ChangeEvent, KeyboardEvent, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Todo = () => {
  const tasks = useSelector((store) => store.taskReducer.data);
  const filterS = useSelector((store) => store.filterReducer);
  const [inputNewTask, setInputNewTask] = useState('');

  const dispatch = useDispatch();

  const inputTextt = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if(tasks.length === 0) {
      inputTextt?.current?.focus()
    }

  });

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
    if(e.key === "Escape") {
      setInputNewTask('');
    }
  }
// const count =() => {
//   let res;
//   filterS.showAll
//   ? res=tasks.length
//   :  res=tasks.filter((item) => !item.completed).length
//   ? filterS.showCompleted
//   : res=tasks.filter((item) => item.completed).length
// }

// const res = count()

const countTest = () => {
  let count: number;
  if(filterS.showAll) {
    return tasks.length
  }
  if(filterS.showActive) {
    return tasks.filter((item) => !item.completed).length;
  }
  if(filterS.showCompleted) {
    return tasks.filter((item) => item.completed).length;
  }
  return tasks.length
};

  const filterItems = (items: TTask[]) => {
    if(filterS.showAll) {
      return items;

    }
    if(filterS.showActive) {
      return items.filter((item) => !item.completed);
    }
    if(filterS.showCompleted) {
      return items.filter((item) => item.completed);
    }
    return items
  };

  return(
    <div className={styles.container}>
      <div className={styles.addContainer}>
        <InputToDo
        value={inputNewTask}
        onChange={onChangeInputNewTask}
        onKeyDown={onKeyPressInputNewTask}
        ref={inputTextt}/>
        <Button onClick={addTask} text='Добавить задачу' disabled={inputNewTask.length !== 0 ? false : true}/>
      </div>
      <div className={styles.listContainer}>
        <p>Количество задач: {countTest()}</p>
        <div className={styles.scroll}>
          <ul className={styles.list}>
            {tasks && filterItems(tasks).map((item, index) =>
            <ItemToDo task={item}
              key={item.id}
              />
            )}
          </ul>
        </div>

        {tasks.length !== 0 ? (<div className={styles.filterContainer}>
            <Button onClick={()=>dispatch(ShowAllTask())} text='Все задачи' disabled={false}/>
            <Button onClick={()=>dispatch(ShowCompleteTask())} text='Выполненные' disabled={false}/>
            <Button onClick={()=>dispatch(ShowActiveTask())} text='Активные' disabled={false}/>
          </div>) : null}
      </div>


    </div>

  )
}