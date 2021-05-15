import React, { useEffect, useState } from "react";

export const App = () => {
  const [countries, setCountries] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // (async function() {
    //with anonymous function
    (async () => {
      try {
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const res = await response.json();
        console.log(res);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return <div>lolxssss</div>;
};

export default App;
