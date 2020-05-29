import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectStatus
} from './battleGridSlice';


interface BattleGridBoxProps {
  cellKey: number,
  cellValue: number,
  numberGridValue: number,
}

export function BattleGridBox(props: BattleGridBoxProps) {

  const status = useSelector(selectStatus);

  const coordinate = 'ABCDEFG'.split('')[props.cellValue]+props.numberGridValue
  const battleStatus = status[coordinate]

  if(battleStatus === 'ship-hit'){
    return <td key={props.cellKey} className='battleGridBox hit ship'><img src='starship-hopper.png' alt='HIT' width='60px' className='dragonHit'/></td>
  }else if(battleStatus === 'ship'){
    return <td key={props.cellKey} className='battleGridBox'></td>
  }else if(battleStatus === 'hit'){
    return <td key={props.cellKey} className='battleGridBox hit'></td>
  }else{
    return <td key={props.cellKey} className='battleGridBox'></td>
  }

}