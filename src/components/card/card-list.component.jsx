import * as React from "react";
import "./card.style.css";
import { Card } from "./card.component";

export const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
