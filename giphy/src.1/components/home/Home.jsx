import { useState, useEffect } from "react";
import "./home.scss";
import axios from "axios";
import SearchBar from "../searchBar/SearchBar";
import Cards from "../cards/Cards";
// import Spinner from "../spinner/Spinner";
import Spinner from "react-bootstrap/Spinner";
import Footer from "../Footer/Footer";

export default function Home() {
  const [search, setSearch] = useState("");
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
          //   api_key: "tAEFUgagRjRNkU24orQdFB8EHMcNTUSe",
          q: search
          // limit: 100
        }
      });

      console.log(data);
      setData(data);
    } catch (err) {
      setIsError(true);
      setTimeout(() => setIsError(false), 4000);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData("ball");
  }, []);

  const handleSubmit = (e, str) => {
    //   setSearch(str)
    e.preventDefault();
    setIsLoading(true);
    fetchData(str);
    setIsLoading(false);
    console.log(str);
  };
  return (
    <>
      {isLoading ? (
        <div className="loading">
          ...loading
          {/* <>
            <Spinner animation="border" size="sm" />
            <Spinner animation="border" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
          </> */}
        </div>
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
