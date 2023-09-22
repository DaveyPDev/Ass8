import React, { useState } from 'react';

const MadLibsForm = ({ updateStory }) => {
  const [inputs, setInputs] = useState({
    noun: '',
    verb: '',
    adjective: '',
    color: '',
  });

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { noun, verb, adjective, color } = inputs;
    const story = `There was a ${color} ${noun} who loved a ${adjective} ${verb}.`;

    updateStory(story);
  };

  return (
    <div className="MadLibForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="noun"
          placeholder="Noun"
          value={inputs.noun}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="verb"
          placeholder="Verb"
          value={inputs.verb}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="adjective"
          placeholder="Adjective"
          value={inputs.adjective}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={inputs.color}
          onChange={handleInputChange}
        />
        <button type="submit">Get Story</button>
      </form>
    </div>
  );
};

export default MadLibsForm;
