import React, { useState } from "react";
import { useDrop } from "./useDrop";
export default useDrop;
export const searchParams = () => {
  const changableArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [random, caller] = useDrop("random", "this is default value", array);
  const [array, changeValue] = useState("please choose an option");
  const [location, setLocation] = useState("Seattle"); //suse state is as hook in hich oation sis sssseattle and setlocations ca  change the location hen called
  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          loacation
          <input
            placeholder="location"
            id="location"
            value={location}
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          ></input>
        </label>
        <caller />
        <label htmlFor="pet">
          pet
          <select
            placeholder="Pet"
            id="pet"
            onChange={(event) => changeValue(event.target.value)}
            onBlur={(event) => changeValue(event.target.value)}
          >
            <option>All</option>
            {changableArray.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
