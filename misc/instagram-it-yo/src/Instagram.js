import React from 'react';

const Instagram = (imageReference) => {
  return <div>
    <img src={`http://localhost:3001/image/${imageReference.image}`}/>
  </div>
};

export default Instagram