import React from 'react';
import { ICharacter } from './App';

interface IProperties {
  characterData: Array<ICharacter>;
  removeCharacter: (index: number) => void;
}

const TableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody: React.FC<IProperties> = ({
  characterData,
  removeCharacter,
}) => {
  const rows = characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td className="name">{row.name}</td>
        <td className="job">{row.job}</td>
        <td>
          <button onClick={() => removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table: React.FC<IProperties> = ({ characterData, removeCharacter }) => {
  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  );
};

export default Table;
