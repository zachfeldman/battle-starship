import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

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
      // state.scores =
      console.log(state)
      console.log(action.payload)
      // state.scores
      // Ifthe score is greater than at least one score
      // Object.values(scores).sort()

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
    // increment: state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: state => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { updateHighScores } = highScoresSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount: number): AppThunk => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const displayHighScore = (state: RootState) => state.timer.currentSecond === 0;
export const highScores = (state: RootState) => state.highScores.scores


export default highScoresSlice.reducer;
