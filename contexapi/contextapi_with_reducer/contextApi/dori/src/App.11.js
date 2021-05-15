import React, { useEffect, useState } from "react";

export const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const data = async () => {
    const apiRes = await fetch("https://restcountries.eu/rest/v2/all");
    const resJSON = await apiRes.json();
    // console.log(resJSON);
    return resJSON;
  };

  useEffect(() => {
    data().then(res => console.log(res[0]));
    // (async function() {
    //with anonymous function
    (async () => {
      try {
        setLoading(true);
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const res = await response.json();
        setLoading(false);
        setCountries(res);
        console.log(res);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setLoading(false);
      }
    })();
  }, []); //[], to make it like componentDidmount
  //[var], make it like componentDidupdate just when var update
  //without [] , make it like componentDidmount for all var that update ..update? setName("sdori") - Hooks state
  if (!loading) {
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
