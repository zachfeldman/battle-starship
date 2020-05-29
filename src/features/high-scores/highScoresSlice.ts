import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface HighScoresState {
  scores: {[playerName: string]: number};
}

const initialState: HighScoresState = {
  scores: {'AAA': 2, 'BBB': 3, 'CCC': 1, 'UUU': 8, 'WWW': 3}
};

export const highScoresSlice = createSlice({
  name: 'highScores',
  initialState,
  reducers: {
    updateHighScores: (state, action: PayloadAction<number>) => {
      const scores = state.scores
      const lowestHighScore = Object.values(scores).sort().splice(0)[0]
      const sortedHighScores = Object.entries(scores).sort((one,two)=> (one[1] > two[1]) ? -1 : 1)
      const currentScore = action.payload
      if(currentScore > lowestHighScore){
        sortedHighScores.pop()
        sortedHighScores.push(['YOU', currentScore])
      }
      state.scores = Object.fromEntries(sortedHighScores)
    }
  },
});

export const { updateHighScores } = highScoresSlice.actions;


export const displayHighScore = (state: RootState) => state.timer.currentSecond === 0;
export const highScores = (state: RootState) => state.highScores.scores


export default highScoresSlice.reducer;
