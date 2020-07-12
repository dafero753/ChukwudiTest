import React from 'react';
import icon5 from '../statics/recursos/assets/icons/747376.svg'
import './style.css'

function Singup({ user, onAuth, onLogout }) {

  function renderUserData() {
    return (
      <button onClick={onLogout}>
        Logout 
      </button>
    )
  }

  function rederLoginButton() {
    return (
      <button onClick={onAuth}>
        Login
      </button>
    )
  }

  return (
    <div className="singup">
        {renderUserData()}
        {rederLoginButton()}
        <img className="singup-icon" src={icon5} alt="singup-icon" />
        <div className="singup-items">3</div>
    </div>
  );
}

export default Singup;