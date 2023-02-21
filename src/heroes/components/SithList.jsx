import React from "react";
import { getSithByRange } from "../helpers";

export const SithList = ({ range }) => {
  const sithsOnTheGalaxy = getSithByRange(range);

  return (
    <ul>
      {sithsOnTheGalaxy.map((aSith) => (
        <li key={aSith.id}>{aSith.sith}</li>
      ))}
    </ul>
  );
};
