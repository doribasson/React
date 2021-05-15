import { useState, useEffect } from "react";
import "./home.scss";
import axios from "axios";
import SearchBar from "../searchBar/SearchBar";
import Cards from "../cards/Cards";
import Spinner from "../layout/spinner/Spinner";
import Footer from "../layout/footer/Footer";

export default function Home() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async search => {
    setIsError(false);
    setIsLoading(true);

    try {
      const { data } = await axios(`https://api.giphy.com/v1/gifs/search`, {
        params: {
          api_key: "VA653n8fpXNJ80gnf8nLTqjF3mwepqPH",
          q: search,
          limit: 50
        }
      });

      console.log(data);
      setData(data);
    } catch (err) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData("ball");
  }, []);

  const handleSubmit = (e, str) => {
    e.preventDefault();
    setIsLoading(true);
    fetchData(str);
    setIsLoading(false);
    console.log(str);
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        alert("fetch error")
      ) : (
        <div className="container">
          <h1>Giphy</h1>
          <SearchBar handleSubmit={handleSubmit} />
          <Cards cards={data} />
          <Footer />
        </div>
      )}
    </>
  );
}
