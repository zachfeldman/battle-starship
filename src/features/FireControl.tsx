import React from 'react';

export function FireControl() {

  return <div className='fireControl'>
          <img src='crosshairs.png' width="100" alt='crosshairs'/>
          <input type='text' maxLength={2}/>
          <button>FIRE LASER</button>
        </div>
}
