import { ShowActiveTask, ShowAllTask, ShowCompleteTask } from '../../services/actions/filterAction';
import { AddTask } from '../../services/actions/taskActions';
import { useDispatch, useSelector } from '../../services/hooks';
import { TTask } from '../../services/types/data';
import { Button } from '../button/button';
import { InputToDo} from '../inputToDo/inputToDo';
import { ItemToDo } from '../itemToDo/itemToDo';
import styles from './todo.module.css';
import { useState, ChangeEvent, KeyboardEvent, useRef, useEffect } from 'react';

export const Todo = () => {
  const tasks = useSelector((store) => store.taskReducer.data);
  const filter = useSelector((store) => store.filterReducer);
  const [inputNewTask, setInputNewTask] = useState('');
  const inputText = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if(tasks.length === 0) {
      inputText?.current?.focus()
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

  const countTasks = () => {
    if(filter.showAll) {
      return tasks.length
    }
    if(filter.showActive) {
      return tasks.filter((item) => !item.completed).length;
    }
    if(filter.showCompleted) {
      return tasks.filter((item) => item.completed).length;
    }
    return tasks.length
  };

  const filterItems = (items: TTask[]) => {
    if(filter.showActive) {
      return items.filter((item) => !item.completed);
    }
    if(filter.showCompleted) {
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
        ref={inputText}
        className={styles.input}
        placeholder='Ваша задача'
        type='text'/>
        <Button className={inputNewTask.length !== 0 ? styles.addButton: styles.addButtonDis} onClick={addTask} text='Добавить задачу' disabled={inputNewTask.length !== 0 ? false : true}/>
      </div>
      {tasks.length !== 0 &&
      <div className={styles.listContainer}>
        <div className={styles.filterContainer}>
          <Button className={filter.showAll ? styles.filterButtonActive : styles.filterButton}
            onClick={()=>dispatch(ShowAllTask())}
            text='Все задачи'
            disabled={false}/>
          <Button className={filter.showCompleted ? styles.filterButtonActive : styles.filterButton}
            onClick={()=>dispatch(ShowCompleteTask())}
            text='Выполненные'
            disabled={false}/>
          <Button className={filter.showActive ? styles.filterButtonActive : styles.filterButton}
            onClick={()=>dispatch(ShowActiveTask())}
            text='Активные'
            disabled={false}/>
        </div>
        <p className={styles.counterText}>Количество задач:&nbsp;
          <span className={styles.counter}>{countTasks()}</span>
        </p>
        <div className={tasks.length > 7 ? styles.scroll : ''}>
          <ul className={styles.list}>
            {filterItems(tasks).map((item, index) =>
            <ItemToDo task={item}
              key={item.id}
              />
            )}
          </ul>
        </div>
      </div>}
    </div>
  )
}