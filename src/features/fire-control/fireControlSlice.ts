import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { allCoordinates } from '../../battleGridSetup'


interface FireControlState {
  hits: string[],
  ships: string[],
  currentCoordinate: string,
  status: {[characterName: string]: string},
}


let allCoordinatesSetup: {[characterName: string]: string} = {}

allCoordinates.forEach((el, index) => allCoordinatesSetup[el] = 'clean' )

function getRandomSubarray(arr: string[], size: number) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

const initialShips = getRandomSubarray(allCoordinates, 10)

const initialState: FireControlState = {
  hits: [],
  ships: initialShips,
  currentCoordinate: '',
  status: allCoordinatesSetup,
};

export const fireControlSlice = createSlice({
  name: 'fireControl',
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
    fire: (state, action: PayloadAction<string>) => {
      state.hits = [...state.hits, action.payload]
      let newStatus = state.status
      if(state.ships.indexOf(action.payload) !== -1){
        const explosion = new Audio('/explosion.mp3');
        setTimeout(function(){
          explosion.play()
        }, 500)
        newStatus[action.payload] = 'ship-hit'
      }else{
        newStatus[action.payload] = 'hit'
      }

      state.status = newStatus
    },

  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const { fire } = fireControlSlice.actions;


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
export const selectCurrentCoordinate = (state: RootState) => state.fireControl.currentCoordinate;


export default fireControlSlice.reducer;
