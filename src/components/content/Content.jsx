import React from 'react';
import Entry from './Entry';
import emojipedia from '../../emojipedia';

function Content() {
  return (
    <dl className='dictionary'>
      {emojipedia.map((emoji) => (
        <Entry
          id={emoji.id}
          key={emoji.id}
          emoji={emoji.emoji}
          name={emoji.name}
          meaning={emoji.meaning}
        />
      ))}
    </dl>
  );
}

export default Content;
