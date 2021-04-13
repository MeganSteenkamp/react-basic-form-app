import React, { useState } from 'react';
import Table from './Table';
import Form from './Form';

const App = () => {
  const [state, setState] = useState({ characters: [] });

  const removeCharacter = (index) => {
    const { characters } = state;

    setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  const handleSubmit = (character) => {
    setState({ characters: [...state.characters, character] });
  };

  return (
    <div className="container">
      <h1>Megan's React Tutorial</h1>
      <p>Add a character with a name and a job to the table.</p>
      <Table
        characterData={state.characters}
        removeCharacter={removeCharacter}
      />
      <h3>Add New Character</h3>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
