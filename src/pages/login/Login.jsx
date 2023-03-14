import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
    <div className="card">
    <div className="left">
    <h1>Hello World.</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repudiandae inventore eaque, maiores, dolores voluptate aliquid eius ipsam eveniet voluptatum porro optio. Aspernatur, illum. Vel cumque excepturi et hic at.</p>
    <span>Don't you have an account?</span>
    <Link to="/register">
    <button onClick={handleLogin}>Login</button>
    </Link>
    
    </div>
    <div className="right">
        <h1>Login</h1>
        <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
        </form>
    </div>
    </div>
    </div>
  );
};

export default Login