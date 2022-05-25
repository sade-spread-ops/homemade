import React, { useState } from "react";
import { useResolvedPath } from "react-router";
import User from "../../models/User";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: User.firstName,

    }
  ]);

  return <div className="tinderCards">
    {people.map((person) => (
      <h1>{person.firstName}</h1>
    ))}
  </div>;
}

export default TinderCards; 