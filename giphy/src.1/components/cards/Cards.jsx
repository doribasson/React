import "./cards.scss";
import Card from "../card/Card";
const Cards = ({ cards: { data } }) => {
  return (
    <div className="cards_container">
      {/* {console.log(cards)} */}
      {data && data.map((card, i) => <Card card={card} key={i} />)}
      {/* <Card text={"lala"} /> */}
    </div>
  );
};

export default Cards;
