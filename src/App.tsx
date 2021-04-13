import React, { ReactElement, useState } from 'react';
import Table from './Table';
import Form from './Form';

export interface ICharacter {
  name: string;
  job: string;
}

export const App: React.FC = (): ReactElement => {
  const [characters, setState] = useState<Array<ICharacter>>([]);

  const removeCharacter = (index: number) => {
    setState(
      characters.filter((character: ICharacter, i: number) => {
        return i !== index;
      })
    );
  };

  const handleSubmit = (character: ICharacter) => {
    setState([...characters, character]);
  };

  return (
    <div className="container">
      <h1>Megan's React Tutorial</h1>
      <p>Add a character with a name and a job to the table.</p>
      <Table characterData={characters} removeCharacter={removeCharacter} />
      <h3>Add New Character</h3>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};