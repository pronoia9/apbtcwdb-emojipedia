import React from 'react';

function Terms(props) {
  console.log(props.id % 2);
  return (
    <dl className='dictionary'>
      <div className='term'>
        <dt>
          <span className='emoji' role='img' aria-label={props.name}>
            {props.emoji}
          </span>
          <span class={props.id % 2 === 0 ? 'color-a2' : 'color-a1'}>{props.name}</span>
        </dt>
        <dd>{props.meaning}</dd>
      </div>
    </dl>
  );
}

export default Terms;
