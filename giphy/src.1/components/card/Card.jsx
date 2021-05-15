import "./card.scss";

const Card = ({ card: { images } }) => {
  return (
    <div className="card_container">
      {/* <span>{card}</span> */}
      {/* <img src="https://photo.one.co.il/Image/GG/7,1/1525967.jpg?wpq=68" /> */}
      {/* {console.log(card)} */}
      {/* <img src="https://photo.one.co.il/Image/GG/7,1/1525967.jpg?wpq=68" /> */}
      <img src={images.fixed_height.url} />
    </div>
  );
};

export default Card;
