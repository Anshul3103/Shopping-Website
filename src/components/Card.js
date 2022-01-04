import React from 'react';
const Card = (props) => {
  return (
    <>
      <div className="card1 card-covid">
        <a href="#"><img className="card-img-top1" src={props.img} alt="Card image cap" /></a>
        <div className="card-body1">
          <a href="#"><h2 className="card-text1">{props.title}</h2></a>
        </div>
      </div>
    </>
  )
}

export default Card;

