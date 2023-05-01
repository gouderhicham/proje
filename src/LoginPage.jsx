import { useContext } from "react";
import { AppContext } from "./Context";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const { name , setName  } = useContext(AppContext);
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
        <input type="text" onChange={(e)=> {
          setName(e.target.value)
        }} id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button type="submit">Log In</button>
        <div className="social">
          <p >
            Log in as Teacher
          </p>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
