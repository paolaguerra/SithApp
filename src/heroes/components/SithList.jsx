import React, { useMemo } from "react";
import { getSithByRange } from "../helpers";
import { SithCard } from "./SithCard";

export const SithList = ({ range }) => {

  const sithsOnTheGalaxy = useMemo( () => getSithByRange(range), [range]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {sithsOnTheGalaxy.map((aSith) => (
        <SithCard key={aSith.id} {...aSith} />
      ))}
    </div>
  );
};
