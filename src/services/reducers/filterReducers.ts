import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
  UPDATE_FILTER,
  TFilterActions
} from '../actions/filterAction';
import { TTask } from '../types/data';
import { v4 as uuidv4 } from 'uuid';

type TInitialState = {
  showAll: boolean;
  showActive: boolean;
  showCompleted: boolean;
};

const initialState: TInitialState = {
  showAll: false,
  showActive: false,
  showCompleted: false
};

export const filterReducer = (
  state = initialState,
  action: TFilterActions
  ): TInitialState => {
  switch (action.type) {
    case SHOW_ALL: {
      return {
        showAll: true,
        showActive: false,
        showCompleted: false
      };
    }
    case SHOW_ACTIVE: {
      return {
        showAll: false,
        showActive: true,
        showCompleted: false
      };
    }
    case SHOW_COMPLETED: {
      return {
        showAll: false,
        showActive: false,
        showCompleted: true
      }
    }
    default: {
      return state;
    }
  }
};
