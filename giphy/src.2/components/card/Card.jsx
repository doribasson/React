import "./card.scss";

const Card = ({ card: { images } }) => {
  return (
    <div className="card_container">
      <img src={images.fixed_height.url} alt={"img"} />
    </div>
  );
};

export default Card;
