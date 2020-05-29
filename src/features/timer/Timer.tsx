import React, { Component, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentSecond,
  decrementTimer
} from './timerSlice';
import { updateHighScores } from '../high-scores/highScoresSlice'
import {
  selectHits
} from '../score/scoreSlice';
// import styles from './Counter.module.css';

interface TimerProps {
  countdown: number
}

// export class Timer extends Component<TimerProps> {
// export class Timer(props: TimerProps)
export function Timer(props: TimerProps){

  const currentSecond = useSelector(selectCurrentSecond);
  const currentScore = useSelector(selectHits);
  const dispatch = useDispatch();
  // const currentSecond = useState(props.countdown)
  // const dispatch = useDispatch();
  // const [coordinate, setCoordinate] = useState('C3');

  // const laser = new Audio('/laser-shot.mp3');
 // this.interval = setInterval(() => {
 //      const { timeTillDate, timeFormat } = this.props;
 //      const then = moment(timeTillDate, timeFormat);
 //      const now = moment();
 //      const countdown = moment(then - now);
 //      const days = countdown.format('D');
 //      const hours = countdown.format('HH');
 //      const minutes = countdown.format('mm');
 //      const seconds = countdown.format('ss');

 //      this.setState({ days, hours, minutes, seconds });
 //  }, 1000);

 // componentDidMount(){
 //  setInterval(()=>{
 //   this.setState({currentSecond: this.state.currentSecond - 1})
 //  }, 1000)
 // }

 // render(){
  // const currentSecond = useState(props.countdown)
  useEffect(() => {
    setTimeout(()=>{dispatch(decrementTimer())}, 1000)
    if(currentSecond === 0){
      dispatch(updateHighScores(currentScore))
    }
  });

  return (
    <div className='counter'>
      <h3>Timer</h3>
      <div className='count'>
        {('000' + currentSecond).slice(-3)}
      </div>
    </div>
  );

}
