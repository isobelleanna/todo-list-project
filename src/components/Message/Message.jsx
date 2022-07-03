import React from "react";
import "./Message.scss";

const Message = ({ activeList }) => {
  return (
    <div>
      {activeList ? (
        <p></p>
      ) : (
        <p>Nothing to see yet....Add a task to the field above 👆</p>
      )}
    </div>
  );
};

export default Message;
