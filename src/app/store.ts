import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import fireControlReducer from '../features/fire-control/fireControlSlice';
import timerReducer from '../features/timer/timerSlice';
import highScoresReducer from '../features/high-scores/highScoresSlice';


export const store = configureStore({
  reducer: {
    fireControl: fireControlReducer,
    timer: timerReducer,
    highScores: highScoresReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
