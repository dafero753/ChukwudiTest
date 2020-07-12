import React from 'react';
import './style.css'

function Post({ categorie }) {

  return (
    <div className="categorie">
        <div className="categorie-iconbox">
          <img className="categorie-icon" src={categorie.icon} alt={categorie.name} />
        </div>
        <div className="categorie-name">
            {categorie.name}
        </div>
    </div>
  );
}

export default Post;