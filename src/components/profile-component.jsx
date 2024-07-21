import { useNavigate } from "react-router-dom";

const ProfileComponent = ({ user, setUser }) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div style={{ padding: "3rem" }}>
      {!user && (
        <div>
          <h2>Please login your account first!</h2>
          <br />
          <button onClick={handleLogin} className="btn btn-primary btn-block">
            Login Page
          </button>
        </div>
      )}
      {user && (
        <div>
          <h2>Your Profile</h2>

          <table className="table">
            <tbody>
              <tr>
                <td>
                  <strong>姓名：{user.username}</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>您的用戶ID：{user._id}</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>您註冊的電子信箱：{user.email}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
