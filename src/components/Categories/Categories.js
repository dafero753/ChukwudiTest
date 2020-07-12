import React from 'react';
import Categorie from '../Categorie'
import './style.css'

function Categories({ categories }) {
    return (
      <div className="categories">
        {categories && categories.length > 0 && categories.map(categorie => {
          return <Categorie key={categorie.id} categorie={categorie}  />;
        })}
      </div>
    )
  }
  
  export default Categories;