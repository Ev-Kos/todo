export const ADD_TASK: 'ADD_TASK' = 'ADD_TASK';
export const REMOVE_TASK: 'REMOVE_TASK' = 'REMOVE_TASK';

export interface IAddTask {
  readonly type: typeof ADD_TASK;
  readonly text: string;
}

export interface IRemoveTask {
  readonly type: typeof REMOVE_TASK;
  readonly id: string;
}

export type TTaskActions =
| IAddTask
| IRemoveTask;

export const AddTask = (text: string): IAddTask => ({
  type: ADD_TASK,
  text
})
export const RemoveTask = (id: string): IRemoveTask => ({
  type: REMOVE_TASK,
  id
})