import "./cards.scss";
import Card from "../card/Card";
const Cards = ({ cards }) => {
  return (
    <div className="cards_container">
      {cards?.data && cards.data.length === 0 ? (
        <div className="not_found"> Not found... pls try something else</div>
      ) : (
        cards?.data &&
        cards.data.map((card, i) => <Card card={card} key={card.id} />)
      )}
    </div>
  );
};

export default Cards;
