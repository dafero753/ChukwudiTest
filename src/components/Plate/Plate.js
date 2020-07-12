import React from 'react';
import Icon10 from '../statics/recursos/assets/icons/149220.svg'
import './style.css'

function Post({ plate }) {

  return (
    <div className="plate">
        <div className="plate-box">
            <img className="plate-img" src={plate.image} alt={plate.name} />
            <div className="plate-time">
                {plate.time}
            </div>
        </div>
        <div className="plate-name">
            <p className="plate-text">{plate.name}</p>
        </div>
        <div className="plate-qualification">
            <div className="plate-number">
                <img className="plate-star" src={Icon10} alt="plate-star" />
                <p>{plate.qualification}</p>
            </div>
            <div className="plate-price">
                ${plate.price}
            </div>
        </div>
    </div>
  );
}

export default Post;