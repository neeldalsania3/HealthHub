import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LOGIN() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((result) => {
        console.log(result);
        if(result.data === "admin"){
          navigate("/admindashboard");
        }
        else if(result.data === "success"){
          navigate("/userdashboard");
        }
        else{
          navigate("/register")
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="form-body">
        <div className="row">
          <div className="img-holder">
            <div className="bg"></div>
            <div className="info-holder">
              <h3>Access more things with Login </h3>
              <img src="/LoginRegisterAssets/images/graphic5.svg" alt="" />
            </div>
          </div>
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <div className="website-logo-inside">
                  <Link to="/">
                    <div className="healthhubcolor">
                      <h2>HealthHub</h2>
                    </div>
                  </Link>
                </div>
                <div className="page-links">
                  <Link className="active">Login</Link>
                  <Link to="/Register">Register</Link>
                </div>
                <form onSubmit={handleSubmit}>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    placeholder="E-mail Address"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="form-button">
                    <button className="ibtn">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="/LoginRegisterAssets/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="/LoginRegisterAssets/css/fontawesome-all.min.css"
      />
      <link rel="stylesheet" href="/LoginRegisterAssets/css/iofrm-style.css" />
      <link rel="stylesheet" href="/LoginRegisterAssets/css/iofrm-theme9.css" />
    </>
  );
}
