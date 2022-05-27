import React from 'react';
import Modal from "react-modal";

Modal.setAppElement("#root");

const Box = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Box">
      <button onClick={toggleModal}>Open modal</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="User Added To Matches"
      >
        <div>My modal dialog.</div>
        <button onClick={toggleModal}>Thanks!</button>
      </Modal>
    </div>
  );
};

export default Box;