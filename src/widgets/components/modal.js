import React from 'react';
import './modal.css';

function Modal(props) {
  return (
    <div className="Modal">
      {props.children}
      {/* Otra forma de hacerlo es con Link para cerrar el modal
        <Link to={{ pathname: '/videos', state: { modal: false }}}><Link>
       */}
      <button
        onClick={props.handleClick}
        className="Modal-close"
      />
    </div>
  )
}

export default Modal;
