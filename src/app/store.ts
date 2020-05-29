import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import fireControlReducer from '../features/fire-control/fireControlSlice';
import battleGridBoxReducer from '../features/battle-grid-box/battleGridSlice';
import timerReducer from '../features/timer/timerSlice';
import highScoresReducer from '../features/high-scores/highScoresSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fireControl: fireControlReducer,
    battleGrid: battleGridBoxReducer,
    timer: timerReducer,
    highScores: highScoresReducer
  },
});

console.log(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
