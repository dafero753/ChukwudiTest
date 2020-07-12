import React from 'react';
import ima7 from '../statics/recursos/assets/images/pexels-photo-1600711.jpeg'
import './style.css'

function Post({ select }) {

  return (
    <div className="select">
        <img className="select-img" src={ ima7 } alt={select.name} />
        <div className="select-name">
            <p className="select-list1">1 x {select.name}</p>
        </div>
        <div className="select-price">
           <p className="select-list2">{select.price}</p>
        </div>
    </div>
  );
}

export default Post;