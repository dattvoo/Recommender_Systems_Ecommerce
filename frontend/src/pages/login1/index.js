import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../../component/ErrorMessage";
import { Footer } from "../../component/footer";
import "../../general/css/grid.css";
import "../../general/fontawesome-free-6.2.0-web/css/all.min.css";
import "../../general/form/validator.js";
import "./style.css";

export const Login1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [valueLogin, setValueLogin] = useState({
    username: "",
    password: "",
  });
  console.log("🚀 ~ file: index.js:22 ~ Login1 ~ valueLogin", valueLogin);
  const onFinish = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        valueLogin
      );
      dispatch({ type: "LOGIN", payload: data });
      Cookies.set("user", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      // setLoading(false);
      setError(error.response.data.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleFormChange = (e) => {
    console.log(`${e.target.name}: ${e.target.value}`);
    setValueLogin((value) => {
      return {
        ...value,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="login-form">
      <div className="login-form__header">
        <div className="login-form__logo">
          <a href="" className="login-form__logo-link">
            <img
              alt="photo"
              src={require("../../general/img/logo.png")}
              className="login-form__logo-img"
            />
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
            <img
              alt="photo"
              src={require("../../general/img/banner4.png")}
              className="login-form__mod-left-img"
            />
          </div>
          <div className="login-form__mod-right">
            <h3 className="login-form__mod-title">Log In</h3>

            <div className="login-form_mod-input">
              {/* <form  className="form" id="form-1"> */}
              <div className="form-group">
                <div className="form-group__input">
                  <label for="username" className="form-label">
                    Username or Email
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Username or email..."
                    className="form-control"
                    onChange={handleFormChange}
                  />
                </div>
              </div>
              <ErrorMessage errorMessage="asldasdjhaskldoaidoiqueioqdjalskjd asjdklasj asjdias jias " />
              <div className="form-group">
                <div className="form-group__input">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password..."
                    className="form-control"
                    onChange={handleFormChange}
                  />
                </div>

                <span className="form-message"></span>
              </div>

              <button className="form-submit" onClick={onFinish}>
                Log In
              </button>
              {/* </form> */}

              <div className="login-form__mod-forgot">
                <a href="" className="login-form__mod-forgot-link">
                  Forgot Password?
                </a>
              </div>
            </div>

            <div className="login-form__mod-bottom">
              <div className="login-form__bottom-line">
                <span>OR</span>
              </div>

              <ul className="login-form__mod-type-login">
                <li className="list-type__login">
                  <i className="fa-brands fa-facebook"></i>
                  <span>Facebook</span>
                </li>
                <li className="list-type__login">
                  <i className="fa-brands fa-google"></i>
                  <span>Google</span>
                </li>
                <li className="list-type__login">
                  <i className="fa-brands fa-apple"></i>
                  <span>Apple</span>
                </li>
              </ul>

              <div className="login-form__mod-register">
                Don't have an Account?
                <Link to="/register" className="register-link">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
