"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var TableHeader = function () {
    return (<thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>);
};
var TableBody = function (props) {
    var rows = props.characterData.map(function (row, index) {
        return (<tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={function () { return props.removeCharacter(index); }}>
                        Delete
                    </button>
                </td>
            </tr>);
    });
    return <tbody>{rows}</tbody>;
};
var Table = function (props) {
    var characterData = props.characterData, removeCharacter = props.removeCharacter;
    return (<table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
        </table>);
};
exports.default = Table;
