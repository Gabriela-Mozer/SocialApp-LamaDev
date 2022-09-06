import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">PepeSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around PepeSocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
          <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Repeat Password" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Do you already have Account?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
