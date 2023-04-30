import { useContext } from "react";
import { AppContext } from "./Context";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const { name } = useContext(AppContext);
  const navigate = useNavigate();
  function submit(e) {
    e.preventDefault();
    //NOTE: after submite must check if user exist in the database if yes then redirect to /student/${id}`
    navigate(`/student/${name}`);
  }
  return (
    <div className="login-page">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={submit}>
        <h3>Login Here</h3>

        <label htmlFor="username">ID</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button type="submit">Log In</button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Log in as Teacher
          </div>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
