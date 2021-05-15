import React, { useContext } from "react";
import { AppContext } from "../contexts/AppProvider";

const Search = () => {
  const { count } = useContext(AppContext);
  return (
    <div>
      {console.log("search")}
      <span>iam search {count}</span>
    </div>
  );
};

export default Search;
