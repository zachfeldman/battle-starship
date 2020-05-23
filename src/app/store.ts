import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import fireControlReducer from '../features/fire-control/fireControlSlice';
import battleGridBoxReducer from '../features/battle-grid-box/battleGridSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fireControl: fireControlReducer,
    battleGrid: battleGridBoxReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
