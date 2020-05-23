import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import fireControlReducer from '../features/fire-control/fireControlSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fireControl: fireControlReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
