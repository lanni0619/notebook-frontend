import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";

const NavComponent = ({ user, setUser }) => {
  const handleLogout = () => {
    AuthService.logout();
    setUser(null);
    window.alert("logout successfully!");
  };
  return (
    <div>
      <nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    首頁
                  </Link>
                </li>

                {!user && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      註冊會員
                    </Link>
                  </li>
                )}

                {!user && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      會員登入
                    </Link>
                  </li>
                )}
                {!user && (
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to={process.env.REACT_APP_BACKEND_URL + "/auth/google"}
                    >
                      <img
                        src="https://img.icons8.com/color/16/000000/google-logo.png"
                        alt={"google icon"}
                      />
                      透過Google登入
                    </Link>
                  </li>
                )}

                {user && (
                  <li className="nav-item">
                    <Link onClick={handleLogout} className="nav-link" to="/">
                      登出
                    </Link>
                  </li>
                )}

                {user && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/create">
                      新增筆記
                    </Link>
                  </li>
                )}

                {user && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/browse">
                      瀏覽筆記
                    </Link>
                  </li>
                )}

                {user && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Welcome, {user.username} !
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default NavComponent;
