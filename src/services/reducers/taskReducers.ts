import {
  ADD_TASK,
  REMOVE_TASK,
  UPDATE_TASK,
  EDITE_TASK,
  COMPLETED_TASK,
  CANCEL_EDITE_TASK,
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
            editing: false,
            completed: false
          },
        ],
      };
    }
    case REMOVE_TASK: {
      return {
        data: state.data.filter((item) => item.id !== action.id)
      };
    }
    case UPDATE_TASK: {
      return {
        data: state.data.map((item) => ((item.id === action.id)
        ? {...item, text: action.text, editing: false}
        : item))
      }
    }
    case EDITE_TASK: {
      return {
        data: state.data.map((item) => ((item.id === action.id)
        ? {...item, editing: true}
        : item))
      }
    }
    case CANCEL_EDITE_TASK: {
      return {
        data: state.data.map((item) => ((item.id === action.id)
        ? {...item, editing: false}
        : item))
      }
    }
    case COMPLETED_TASK: {
      return {
        data: state.data.map((item) => ((item.id === action.id)
        ? {...item, completed: true}
        : item))
      }
    }
    default: {
      return state;
    }
  }
};
