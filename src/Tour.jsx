import React from "react";

export default function Tour(props) {

  const [isReadMore, setIsReadMore] = React.useState(false);

  return (
    <div className="single-tour">
      <img src={props.image} alt={props.name} />
      <footer>
        <div className="tour-info">
          <h4>{props.name}</h4>
          <h4 className="tour-price">{props.price}</h4>
        </div>
        <p>
          {isReadMore ? props.info : `${props.info.substring(0, 150)}...`}
          <button onClick={() => setIsReadMore(!isReadMore)}>
            {isReadMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => props.removeTour(props.id)}>Not Intrested</button>
      </footer>
    </div>
  );
}
