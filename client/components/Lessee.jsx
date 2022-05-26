import React from 'react';

const Lessee = (props) => {
  return (
    <div>
      { props.lessee.firstName }
      <br></br>
      { props.lessee.gender }
      <br></br>
      { props.lessee.age }
      <br></br>
      <img src={ props.lessee.imageURL }/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </div>
  );
};

export default Lessee;