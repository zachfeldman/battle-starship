import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { allCoordinates } from '../../battleGridSetup'


interface ScoreState {
  hits: string[],
  ships: string[],
  currentCoordinate: string,
  status: {[characterName: string]: string},
}


let allCoordinatesSetup: {[characterName: string]: string} = {}

allCoordinates.forEach((el, index) => allCoordinatesSetup[el] = 'clean' )

const initialState: ScoreState = {
  hits: [],
  ships: ['B2', 'E3'],
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

export const { fire } = fireControlSlice.actions;


export const selectHits = (state: RootState) => Object.values(state.fireControl.status).filter((v)=> v === "ship-hit").length;
export const selectSinks = (state: RootState) => state.fireControl.currentCoordinate;

export default fireControlSlice.reducer;
