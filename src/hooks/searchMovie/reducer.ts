import { Reducer } from 'react';
import { Movie } from 'models/movie';

enum ActionType {
  INIT = 'INIT',
  SUCCESS = 'SUCCESS',
}

export interface State<D> {
  isPending: boolean;
  isSuccess: boolean;
  data: D;
}

export interface Action<D> {
  type: ActionType;
  data: D;
}

export const initialState: State<any> = {
  data: [],
  isPending: true,
  isSuccess: false,
};

export function initAction(): Action<any> {
  return { type: ActionType.INIT, data: [] };
}

function reduceInit(): State<any> {
  return {
    ...initialState,
  };
}

export function successAction<D>(data: D): Action<D> {
  return { type: ActionType.SUCCESS, data };
}

function reduceSuccess<D>(state: State<D>, data: D): State<D> {
  return {
    ...state,
    data,
    isPending: false,
    isSuccess: true,
  };
}

export const reducer: Reducer<State<Movie[]>, Action<Movie[]>> = (
  state,
  action
) => {
  switch (action.type) {
    case ActionType.INIT:
      return reduceInit();

    case ActionType.SUCCESS:
      return reduceSuccess(state, action.data);

    default:
      throw new Error(`Unhandled action type="${action.type}"`);
  }
};
