export const ADD_TASK: 'ADD_TASK' = 'ADD_TASK';
export const REMOVE_TASK: 'REMOVE_TASK' = 'REMOVE_TASK';
export const UPDATE_TASK: 'UPDATE_TASK' = 'UPDATE_TASK';
export const EDITE_TASK: 'EDITE_TASK' = 'EDITE_TASK';
export const CANCEL_EDITE_TASK: 'CANCEL_EDITE_TASK' = 'CANCEL_EDITE_TASK';
export const COMPLETED_TASK: 'COMPLETED_TASK' = 'COMPLETED_TASK';

export interface IAddTask {
  readonly type: typeof ADD_TASK;
  readonly text: string;
}

export interface IRemoveTask {
  readonly type: typeof REMOVE_TASK;
  readonly id: string;
}

export interface IUpdateTask {
  readonly type: typeof UPDATE_TASK;
  readonly id: string;
  readonly text: string;
}

export interface IEditeTask {
  readonly type: typeof EDITE_TASK;
  readonly id: string;
}

export interface ICancelEditeTask {
  readonly type: typeof CANCEL_EDITE_TASK;
  readonly id: string;
}

export interface ICompleteTask {
  readonly type: typeof COMPLETED_TASK;
  readonly id: string;
}

export type TTaskActions =
| IAddTask
| IRemoveTask
| IUpdateTask
| IEditeTask
| ICompleteTask
| ICancelEditeTask;

export const AddTask = (text: string): IAddTask => ({
  type: ADD_TASK,
  text
})
export const RemoveTask = (id: string): IRemoveTask => ({
  type: REMOVE_TASK,
  id
})
export const UpdateTask = (id: string, text: string): IUpdateTask => ({
  type: UPDATE_TASK,
  id,
  text
})
export const EditeTask = (id: string): IEditeTask => ({
  type: EDITE_TASK,
  id
})
export const CancelEditeTask = (id: string): ICancelEditeTask => ({
  type: CANCEL_EDITE_TASK,
  id
})
export const CompletedTask = (id: string): ICompleteTask => ({
  type: COMPLETED_TASK,
  id
})