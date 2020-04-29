import React, { useState } from "react";
export const searchParams = () => {
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
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
};
