import React, { useState, useEffect } from "react";
import { useDrop } from "./useDrop";
export default useDrop;
export const SearchParams = () => {
  const changableArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [CallerChanger] = useDrop(
    "random",
    "this is default value",
    changableArray
  );
  const [array, ChangeValue] = useState("please choose an option");
  const [location, SetLocation] = useState("Seattle, WA"); //suse state is as hook in hich oation sis sssseattle and setlocations ca  change the location hen called
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
              SetLocation(event.target.value);
            }}
          ></input>
        </label>
        <CallerChanger></CallerChanger>
        <label htmlFor="pet">
          pet
          <select
            placeholder="Pet"
            id="pet"
            onChange={(event) => ChangeValue(event.target.value)}
            onBlur={(event) => ChangeValue(event.target.value)}
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
