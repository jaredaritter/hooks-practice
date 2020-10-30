import React from 'react';
import TitleChange from './TitleChange';
import FriendStatusClass from './FriendStatusClass';
import FriendStatusFunction from './FriendStatusFunction';

const StateEffect = () => {
  return (
    <div>
      <h2>State Effects</h2>
      <TitleChange />
      <div>
        <h2>Friend Status Class</h2>
        <FriendStatusClass />
      </div>
      <div>
        <h2>Friend Status Function</h2>
        <FriendStatusFunction />
      </div>
    </div>
  );
};

export default StateEffect;
