import { useContext } from "react";
import { AppContext } from "../contexts/AppContextProvider";

const Search = () => {
  const {
    dispatch,
    state: { count, random }
  } = useContext(AppContext);

  return (
    <div>
      {console.log("search")}
      <p>iam search count {count}</p>
      <p>iam search random {random}</p>
    </div>
  );
};

export default Search;
