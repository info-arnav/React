import React from "react";
export const searchParams = () => {
  const location = "india";
  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          loacation
          <input placeholder="location" id="location" value={location}></input>
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
};
