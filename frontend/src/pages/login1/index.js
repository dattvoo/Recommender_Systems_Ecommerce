import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../../component/footer";
import "../../general/css/grid.css";
import "../../general/fontawesome-free-6.2.0-web/css/all.min.css";
import "../../general/form/validator.js"
import "./style.css";

export const Login1 = () => {

  return (
    <div className="login-form">
      <div className="login-form__header">
        <div className="login-form__logo">
          <a href="" className="login-form__logo-link">
            <img alt="photo" src={require("../../general/img/logo.png")} className='login-form__logo-img' />
          </a>
          Login
        </div>
        <div className="login-form__help">
            <a href="#" className="login-form__help-link">
            Need help?
            </a>
        </div>
      </div>
      {/* center  */}

      <div className="login-form__middle">
        <div className="login-form__mod">
          <div className="login-form__mod-left">
            <img alt="photo" src={require("../../general/img/banner4.png")} className='login-form__mod-left-img' />
          </div>
          <div className="login-form__mod-right">
            <h3 className="login-form__mod-title">
              Log In
            </h3>

            <div className="login-form_mod-input">
              <form action="" method="POST" class="form" id="form-1">    
                <div class="form-group">
                  <div className="form-group__input">
                    <label for="username" class="form-label">Username or Email</label>
                    <input id="username" name="username" type="text" placeholder="Username or email..." class="form-control" />
                  </div>
                  <span class="form-message"></span>
                </div>
            
                <div class="form-group">
                <div className="form-group__input">
                  <label for="password" class="form-label">Password</label>
                  <input id="password" name="password" type="password" placeholder="Password..." class="form-control" />
                </div>
                  
                  <span class="form-message"></span>
                </div>
            
                <button class="form-submit">Log In</button>
              </form>
              <div className="login-form__mod-forgot">
                <a href="" className="login-form__mod-forgot-link">Forgot Password?</a>
              </div>
            </div>

            <div className="login-form__mod-bottom">
              <div className="login-form__bottom-line">
                <span>OR</span>
              </div>

              <ul className="login-form__mod-type-login">
                <li className="list-type__login">
                  <i class="fa-brands fa-facebook"></i> 
                  <span>Facebook</span>
                </li>
                <li className="list-type__login">
                  <i class="fa-brands fa-google"></i> 
                  <span>Google</span>
                </li>
                <li className="list-type__login">
                  <i class="fa-brands fa-apple"></i> 
                  <span>Apple</span>
                </li>
              </ul>

              <div className="login-form__mod-register">
                Don't have an Account?
                <a href="" className="register-link">Register</a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
   
    
  );
};
