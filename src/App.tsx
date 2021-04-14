import React, { useState } from 'react';
import Table from './Table';
import Form from './Form';

export interface ICharacter {
  name: string;
  job: string;
}

export const App: React.FC = () => {
  const [state, setState] = useState<Array<ICharacter>>([]);

  const removeCharacter = (index: number) => {
    setState(
      state.filter((character: ICharacter, i: number) => {
        return i !== index;
      })
    );
  };

  const handleSubmit = (character: ICharacter) => {
    setState([...state, character]);
  };

  return (
    <div className="container">
      <div>
        <h1>Megan's React Tutorial</h1>
        <p>Add a character with a name and a job to the table.</p>
      </div>
      <div className="section table">
        <Table characterData={state} removeCharacter={removeCharacter} />
      </div>
      <div>
        <h3>Add New Character</h3>
      </div>
      <div className="section form">
        <Form handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};
