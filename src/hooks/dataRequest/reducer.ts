import { Reducer } from 'react';

enum ActionType {
  INIT = 'INIT',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  RETRY = 'RETRY',
}

export interface State<D> {
  isPending: boolean;
  isSuccess: boolean;
  isInitialized: boolean;
  isFailed: boolean;
  data: D | undefined;
  error: Error | undefined;
}

export interface Action<D> {
  type: ActionType;
  data: D | undefined;
  error?: Error | undefined;
}

export const initialState: State<any> = {
  data: undefined,
  error: undefined,
  isInitialized: false,
  isPending: true,
  isSuccess: false,
  isFailed: false,
};

export function retryAction<D>(): Action<D> {
  return { type: ActionType.RETRY, data: undefined };
}

export function initAction<D>(): Action<D> {
  return { type: ActionType.INIT, data: undefined };
}

function reduceInit<D>(): State<D> {
  return {
    ...initialState,
    isInitialized: true,
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
    isFailed: false,
  };
}

export function errorAction<D>(error: Error): Action<D> {
  return { type: ActionType.ERROR, error, data: undefined };
}

function reduceError<D>(state: State<D>, error: Error): State<D> {
  return {
    ...state,
    error,
    isPending: false,
    isSuccess: false,
    isFailed: true,
  };
}

export function reducer<D>() {
  const reducer: Reducer<State<D>, Action<D>> = (state, action) => {
    switch (action.type) {
      case ActionType.INIT:
        return reduceInit();

      case ActionType.SUCCESS:
        return reduceSuccess(state, action.data);

      case ActionType.ERROR:
        return reduceError(state, action.error as Error);

      case ActionType.RETRY:
        return initialState;

      default:
        throw new Error(
          `Unhandled action type="${action.type}" in useDataRequest`
        );
    }
  };

  return reducer;
}
