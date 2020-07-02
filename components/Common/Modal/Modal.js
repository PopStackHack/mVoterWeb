import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#app');

export default function Modal(props) {
  const {
    children,
    isOpen = false,
  } = props;

  return (
    <ReactModal
      { ...props }
      shouldCloseOnOverlayClick={true}
      style={
        {
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          }
        }
      }
      isOpen={isOpen}
      closeTimeoutMS={200}
    >
      {children}
    </ReactModal>
  );
}
