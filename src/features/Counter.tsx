import React from 'react';

interface CustomCounterProps {
  title: string;
  count: number;
}

export class Counter extends React.Component<CustomCounterProps> {

  render() {

    return <div className='counter'>
          <h3>{this.props.title}</h3>
          <div className='count'>
            {('000' + this.props.count).slice(-3)}
          </div>
        </div>
  }
}