import React from 'react';
import Plate from '../Plate'
import './style.css'

function Plates({ plates }) {
    return (
      <div className="plates">
        {plates && plates.length > 0 && plates.map(plate => {
          return <Plate key={plate.id} plate={plate}  />;
        })}
      </div>
    )
  }
  
  export default Plates;