import React from 'react';



const Message = (props) => {


  return (
    <div>
      <h1>hello</h1>
      {props.msg.dataValues.message}
    </div>
  );
};

export default Message;