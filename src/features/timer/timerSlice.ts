import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const secondsForGame = 50

interface TimerState {
  initialSecond: number,
  currentSecond: number
}

const initialState: TimerState = {
  initialSecond: Date.now(),
  currentSecond: secondsForGame
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    decrementTimer: state => {
      state.currentSecond = secondsForGame - Math.round((Date.now() - state.initialSecond)/ 1000)
    },
    resetTimer: state => {
      state.initialSecond = Date.now()
    },
  },
});

export const { resetTimer, decrementTimer } = timerSlice.actions;


export const selectCurrentSecond = (state: RootState) => state.timer.currentSecond;
export const selectInitialSecond = (state: RootState) => state.timer.initialSecond;

export default timerSlice.reducer;
