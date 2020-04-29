import React, { useState } from "react";
export const useDrop = (name, defaultValue, array) => {
  const [mainValue, changer] = useState(defaultValue);
  const key = { name };
  const creator = () => (
    <label htmlFor={key}>
      {name}
      <select
        id={key}
        placeholder="all"
        value={mainValue}
        onChange={(event) => changer(event.target.value)}
        onBlur={(event) => changer(event.target.value)}
      >
        <option>all</option>
        {array.map((keyValue) => (
          <option key={keyValue} value={keyValue}>
            {keyValue}
          </option>
        ))}
      </select>
    </label>
  );
  return [mainValue, changer, creator];
};
