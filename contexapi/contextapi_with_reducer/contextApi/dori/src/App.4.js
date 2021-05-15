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
        setLoad(true);
        console.log(res);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setLoad(true);
      }
    })();
  }, []);

  if (load) {
    return (
      <ul>
        {error ? (
          <li>{error.message}</li>
        ) : (
          countries.map((country, index) => <li key={index}>{country.name}</li>)
        )}
      </ul>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default App;
