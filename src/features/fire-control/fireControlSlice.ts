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
    fire: (state, action: PayloadAction<string>) => {
      state.hits = [...state.hits, action.payload]
      let newStatus = state.status

      const laser = new Audio('/laser-shot.mp3');
      const access_denied = new Audio('/access-denied.mp3');

      if(allCoordinates.indexOf(action.payload) === -1 || state.hits.filter((hit)=>hit === action.payload).length > 1){
        access_denied.play()
      }else if(state.hits.filter((hit)=>hit === action.payload).length === 1){
        laser.play();
      }

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

    resetFireControlState: state => {
      state.status = allCoordinatesSetup
      state.ships = initialShips
      state.hits = []
    },
  }
});

export const { fire, resetFireControlState } = fireControlSlice.actions;

export const selectCurrentCoordinate = (state: RootState) => state.fireControl.currentCoordinate;

export default fireControlSlice.reducer;
