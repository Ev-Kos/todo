export const SHOW_ALL: 'SHOW_ALL' = 'SHOW_ALL';
export const SHOW_ACTIVE: 'SHOW_ACTIVE' = 'SHOW_ACTIVE';
export const SHOW_COMPLETED: 'SHOW_COMPLETED' = 'SHOW_COMPLETED';
export const UPDATE_FILTER: 'UPDATE_FILTER' = 'UPDATE_FILTER';



export interface IShowAllTask {
  readonly type: typeof SHOW_ALL;
}

export interface IShowActiveTask {
  readonly type: typeof SHOW_ACTIVE;
}

export interface IShowCompletedTask {
  readonly type: typeof SHOW_COMPLETED;
}

export type TFilterActions =
| IShowAllTask
| IShowActiveTask
| IShowCompletedTask;

export const ShowAllTask = (): IShowAllTask => ({
  type: SHOW_ALL,
})
export const ShowActiveTask = (): IShowActiveTask => ({
  type: SHOW_ACTIVE,
})
export const ShowCompleteTask = (): IShowCompletedTask => ({
  type: SHOW_COMPLETED,
})