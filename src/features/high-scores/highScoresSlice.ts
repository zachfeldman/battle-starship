import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface HighScoresState {
  scores: [string, number][];
}

const initialState: HighScoresState = {
  // scores: ['AAA': 2, 'BBB': 3, 'CCC': 1, 'UUU': 8, 'WWW': 3]
  scores: [['AAA', 2], ['BBB', 3], ['CCC', 1], ['UUU', 8], ['WWW', 3]]
};

export const highScoresSlice = createSlice({
  name: 'highScores',
  initialState,
  reducers: {
    updateHighScores: (state, action: PayloadAction<number>) => {
      const scores = state.scores
      const currentScore = action.payload

      scores.push(['YOU', currentScore])
      state.scores =  scores.sort((one,two)=> (one[1] > two[1]) ? -1 : 1)
    }
  },
});

export const { updateHighScores } = highScoresSlice.actions;


export const displayHighScore = (state: RootState) => state.timer.currentSecond === 0;
export const highScores = (state: RootState) => state.highScores.scores


export default highScoresSlice.reducer;
