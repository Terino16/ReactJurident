/* eslint-disable react/prop-types */
import "../Components/InfoCard.css"
const InfoCard = (props) => {
  return (
    <div className="Card">
        <div className="Card-img"><img src={props.image} width={200}/></div>
        <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default InfoCard;
