import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
        <div>
          <div className="definition">
            {props.meanings.definition}
          </div>
        <Example example={props.meanings.example} />
        <Synonyms synonyms={props.meanings.synonyms} />
      </div>
    </div>
  );
}