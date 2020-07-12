import React from 'react';
import icon5 from '../statics/recursos/assets/icons/747376.svg'
import './style.css'

function Singup({ user, onAuth, onLogout }) {

  function renderUserData() {
    return (
      <button className="logout" type="buttom" onClick={onLogout}>
        Logout 
      </button>
    )
  }

  function rederLoginButton() {
    return (
      <button className="login" type="buttom" onClick={onAuth}>
        Login
      </button>
    )
  }

  return (
    <div className="singup">
        {rederLoginButton()}
        {renderUserData()}
        <img className="singup-icon" src={icon5} alt="singup-icon" />
        <div className="singup-items">3</div>
    </div>
  );
}

export default Singup;