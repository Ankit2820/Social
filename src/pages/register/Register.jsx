import { Link } from "react-router-dom";

import "./register.scss";

const Register = () => {
  return (
    <div className="register">
    <div className="card">
    <div className="left">
    <h1>Social .</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repudiandae inventore eaque, maiores, dolores voluptate aliquid eius ipsam eveniet voluptatum porro optio. Aspernatur, illum. Vel cumque excepturi et hic at.</p>
    <span>Do you have an account?</span>
    <Link to="/login">
    <button>Login</button>
    </Link>
    </div> 
    <div className="right">
        <h1>Register</h1>
        <form>
            <input type="text" placeholder="username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="name" />
            <button>Register</button>
        </form>
    </div>
    </div>
    </div>
  );
};

export default Register;