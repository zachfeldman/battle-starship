import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { allCoordinates } from '../../battleGridSetup'

type Dictionary = { [index: string]: string }

interface BattleGridBoxState {
  status: {[characterName: string]: string},
}

let allCoordinatesSetup: {[characterName: string]: string} = {}

allCoordinates.forEach((el, index) => allCoordinatesSetup[el] = 'clean' )

console.log(allCoordinatesSetup)

const initialState: BattleGridBoxState = {
  status: allCoordinatesSetup,
};

export const BattleGridSlice = createSlice({
  name: 'battleGridSlice',
  initialState,
  reducers: {
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
    // Use the PayloadAction type to declare the contents of `action.payload`
    // fire: (state, action: PayloadAction<string>) => {
    //   state.hits = [...state.hits, action.payload]
    // },

    checkHit: (state, action: PayloadAction<string>) => {
      // state.hits = [...state.hits, action.payload]
      // console.log(state)
      // console.log(action.payload)
      return state
    },

    fireGrid: (state, action: PayloadAction<string>) => {
      console.log('battlefire')
    }

  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const { checkHit, fireGrid } = BattleGridSlice.actions;


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
// export const selectHits = (state: RootState) => state.fireControl.hits;
// export const selectCurrentCoordinate = (state: RootState) => state.fireControl.currentCoordinate;
// export const selectHits = (state: RootState) => state.fireControl.hits;
// export const selectShips = (state: RootState) => state.fireControl.ships;
export const selectStatus = (state: RootState) => state.fireControl.status;

export default BattleGridSlice.reducer;
