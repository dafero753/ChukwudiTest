import React from 'react';
import Select from '../Select';

import './style.css'

function Post({ selected }) {

  return (
    <div className="selected">
        {selected && selected.length > 0 && selected.map(select => {
          return <Select key={select.id} select={select}  />;
        })}
    </div>
  );
}

export default Post;