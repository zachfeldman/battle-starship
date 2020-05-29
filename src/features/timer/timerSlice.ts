import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const seconds_for_game = 50

interface TimerState {
  currentSecond: number
}

const initialState: TimerState = {
  currentSecond: seconds_for_game
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    decrementTimer: state => {
      if(state.currentSecond > 0){
        state.currentSecond -= 1;
      }
    },
    resetTimer: state => {
      state.currentSecond = seconds_for_game
    },
  },
});

export const { decrementTimer, resetTimer } = timerSlice.actions;


export const selectCurrentSecond = (state: RootState) => state.timer.currentSecond;

export default timerSlice.reducer;
