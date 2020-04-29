import React, { useState } from "react";
export const searchParams = () => {
  const changableArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [array, changeValue] = useState(changableArray);
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
              <option value={animal}>{animal}</option>
            ))}
          </select>
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
};
