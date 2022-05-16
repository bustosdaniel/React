import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function modal({ children }) {
  return modal.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { modal };

//const portal = document.getElementById('modal')
//const modal = createPortal(portal);
//modal.render(<App/>);