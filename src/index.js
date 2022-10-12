import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function Main() {
  return (
    <div className="container">
      <div className="left"></div>
      <div className="right">
        <div className="right-content">
          <p className="form-title">Login to continue</p>
          <div className="all-fields">
            <input type="email" placeholder="Email" id="email"/>
            <input type="password" placeholder="Password" id="password"/>
          </div>
          <div id="other-options">
            <div id="remember">
              <input type="checkbox" htmlFor="remember" id="remember-check"/>
              <label>Remember me</label>
            </div>
            <div><a href="javascript:void(0)">forgot password?</a></div>
          </div>
          <button id="login-btn">login</button>
          <p id="p-text">or sign up using</p>
          <div id="app-links">
            <div className="app app-1"></div>
            <div className="app app-2"></div>
          </div>
        </div>
      </div>

    </div>
  );
}
ReactDOM.render(<Main />, document.querySelector("#root"));