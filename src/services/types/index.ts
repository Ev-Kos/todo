import { store } from '../store';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { TTaskActions } from '../actions/taskActions';
import { TFilterActions } from '../actions/filterAction';

type TApplicationActions =
  | TTaskActions
  | TFilterActions
  ;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;