import React from 'react';

const MadLibStory = ({ story }) => {
  return (
    <div className="MadLibStory">
      <h2>Your MadLib Story:</h2>
      <p>{story}</p>
    </div>
  );
};

export default MadLibStory;
