"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Table_1 = require("./Table");
var Form_1 = require("./Form");
var App = function () {
    var _a = react_1.useState({ characters: [] }), state = _a[0], setState = _a[1];
    var removeCharacter = function (index) {
        var characters = state.characters;
        setState({
            characters: characters.filter(function (character, i) {
                return i !== index;
            }),
        });
    };
    var handleSubmit = function (character) {
        setState({ characters: __spreadArray(__spreadArray([], state.characters), [character]) });
    };
    return (<div className="container">
      <h1>Megan's React Tutorial</h1>
      <p>Add a character with a name and a job to the table.</p>
      <Table_1.default characterData={state.characters} removeCharacter={removeCharacter}/>
      <h3>Add New Character</h3>
      <Form_1.default handleSubmit={handleSubmit}/>
    </div>);
};
exports.default = App;
