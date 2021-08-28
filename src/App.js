import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😀": "Happy Face",
  "😄": "Smiley Face",
  "🥰": "Smiling Face with Hearts",
  "😎": "Smiling Face with Sunglasses",
  "🤏": "Pinching Hand",
  "✌️": "Peace",
  "🤞": "Crossed Fingers",
  "👏": "Clapping",
  "👊": "Punch",
  "🤝": "Handshake"
};

var emojiWeKnown = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setChanges] = useState("Meaning will appear here..");

  function onChangeHandler(event) {
    event.preventDefault();
    var userInput = event.target.value;
    if (userInput in emojiDictionary) {
      setChanges(emojiDictionary[userInput]);
    } else {
      setChanges("failure to recognise this emoji");
    }
  }

  function emojiHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setChanges(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji pedia</h1>
      <input className="input" onChange={onChangeHandler} />
      <div className="output">{meaning} </div>
      <ul>
        {emojiWeKnown.map(function (emoji) {
          return (
            <li
              className="li"
              onClick={() => emojiHandler(emoji)}
              key={emoji}
              style={{}}
            >
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
