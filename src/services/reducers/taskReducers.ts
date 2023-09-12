import {
  ADD_TASK,
  REMOVE_TASK,
  TTaskActions
} from '../actions/taskActions';
import { TTask } from '../types/data';
import { v4 as uuidv4 } from 'uuid';

type TInitialState = {
  data: TTask[];
};

const initialState: TInitialState = {
  data: [],
};

export const taskReducer = (
  state = initialState,
  action: TTaskActions
  ): TInitialState => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        data: [
          ...state.data,
          {
            id: uuidv4(),
            text: action.text,
          },
        ],
      };
    }
    case REMOVE_TASK: {
      return {
        data: state.data.filter((item) => item.id !== action.id)
      };
    }
    default: {
      return state;
    }
  }
};
