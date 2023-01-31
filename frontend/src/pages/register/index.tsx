import { useState } from "react";
import { ErrorMessage } from "../../component/ErrorMessage";
import { Footer } from "../../component/footer";
import "../../general/css/grid.css";
import "../../general/fontawesome-free-6.2.0-web/css/all.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spin } from "../../component/Spin";
export const Register = () => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(false);
  const navigate = useNavigate();

  const yupSchema = Yup.object({
    fullname: Yup.string()
      .min(5, "Your name must be at least 5 characters!")
      .max(25, "Your name must be at least 25 characters")
      .required("You must fill in this section"),
    email: Yup.string()
      .email("Invalid Email")
      .required("You must fill in this section."),
    username: Yup.string()
      .min(4, "Username must be at least 4 characters")
      .required("Username must fill in this section."),
    password: Yup.string()
      .min(5, "Password must be at least 5 characters")
      .required("Password must fill in this section."),
    resetpassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password does not match!")
      .required("You must fill in this section"),
  });
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      username: "",
      password: "",
      resetpassword: "",
      role: "User",
    },
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/register`,
          values
        );
        // dispatch({ type: "LOGIN", payload: data });
        // Cookies.set("user", JSON.stringify(data));
        setLoading(false);

        navigate("/login");
      } catch (error: any) {
        setLoading(false);
        setError(error.response.data.message);
      }
    },
  });

  return (
    <div className="login-form">
      {loading && <Spin />}
      <div className="login-form__header">
        <div className="login-form__logo">
          <a href="" className="login-form__logo-link">
            <img
              alt="photo"
              src={require("../../general/img/logo.png")}
              className="login-form__logo-img"
            />
          </a>
          Register
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
            <h3 className="login-form__mod-title">Register</h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="login-form_mod-input">
                <div className="form-group">
                  <div className="form-group__input">
                    <label htmlFor="fullname" className="form-label">
                      Full Name
                    </label>
                    <input
                      id="fullname"
                      name="fullname"
                      type="text"
                      placeholder="Name..."
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.fullname}
                    />
                  </div>
                  <span className="form-message"></span>
                </div>
                {formik.errors.fullname && formik.touched.fullname && (
                  <ErrorMessage errorMessage={formik.errors.fullname} />
                )}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email address..."
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <span className="form-message"></span>
                </div>
                {formik.errors.email && formik.touched.email && (
                  <ErrorMessage errorMessage={formik.errors.email} />
                )}
                <div className="form-group">
                  <div className="form-group__input">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Username..."
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                    />
                  </div>
                  <span className="form-message"></span>
                </div>
                {formik.errors.username && formik.touched.username && (
                  <ErrorMessage errorMessage={formik.errors.username} />
                )}
                <div className="form-group">
                  <div className="form-group__input">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password..."
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                  </div>
                  <span className="form-message"></span>
                </div>
                {formik.errors.password && formik.touched.password && (
                  <ErrorMessage errorMessage={formik.errors.password} />
                )}
                <div className="form-group">
                  <label htmlFor="password_confirmation" className="form-label">
                    Repeat Password
                  </label>
                  <input
                    id="resetpassword"
                    name="resetpassword"
                    placeholder="Repeat Password..."
                    type="password"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.resetpassword}
                  />
                  <span className="form-message"></span>
                </div>
                {formik.errors.resetpassword &&
                  formik.touched.resetpassword && (
                    <ErrorMessage errorMessage={formik.errors.resetpassword} />
                  )}
                <button className="form-submit" type="submit">
                  Register
                </button>

                <div className="login-form__mod-forgot">
                  <a href="" className="login-form__mod-forgot-link">
                    Already have account?
                  </a>
                </div>
              </div>
            </form>

            <div className="login-form__mod-bottom">
              <div className="login-form__bottom-line">
                <span>OR</span>
              </div>

              <div className="login-form__mod-register">Login with</div>

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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
