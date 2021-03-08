import React from 'react';
import Entry from './Entry';
import emojipedia from '../../emojipedia';

function Content() {
  return <dl className='dictionary'>{emojipedia.map(createEntry)}</dl>;
  // return (
  //   <dl className='dictionary'>
  //     {emojipedia.map((emoji) => (
  //       <Entry
  //         id={emoji.id}
  //         key={emoji.id}
  //         emoji={emoji.emoji}
  //         name={emoji.name}
  //         meaning={emoji.meaning}
  //       />
  //     ))}
  //   </dl>
  // );
}

function createEntry(emoji) {
  return (
    <Entry
      id={emoji.id}
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

export default Content;
