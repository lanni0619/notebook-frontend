import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import Layout from "./components/Layout";
import HomeComponent from "./components/home-component";
import RegisterComponent from "./components/register-component";
import LoginComponent from "./components/login-component";
import ProfileComponent from "./components/profile-component";
import CreateNoteComponent from "./components/create-component";
import BrowseNoteComponent from "./components/browseNote-component";
import EditNoteComponent from "./components/editNote-component";
import { useEffect, useState } from "react";
import AuthService from "./services/auth.service";

function App() {
  let [user, setUser] = useState(AuthService.getUser());
  let [editNoteID, setEditNoteID] = useState("");

  // if login by Google, get jwt by cookies
  useEffect(() => {
    if (Cookies.get("jwt")) {
      let jwt = Cookies.get("jwt");
      AuthService.getGoogleUser(jwt)
        .then((res) => {
          setUser(res.data);
          const userData = {
            username: res.data.username,
            email: res.data.email,
            googleID: res.data.googleID,
            thumbnail: res.data.thubnail,
            time: res.data.time,
            token: "jwt " + jwt,
          };
          localStorage.setItem("user", JSON.stringify(userData));
        })
        .catch((e) => {
          console.log("Get Cookies Error");
          console.log(e);
        });
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout user={user} setUser={setUser} />}>
            <Route index element={<HomeComponent />} />
            <Route path="/signup" element={<RegisterComponent />} />
            <Route
              path="/login"
              element={<LoginComponent user={user} setUser={setUser} />}
            />
            <Route
              path="/profile"
              element={<ProfileComponent user={user} setUser={setUser} />}
            />
            <Route
              path="/create"
              element={<CreateNoteComponent user={user} setUser={setUser} />}
            />
            <Route
              path="/browse"
              element={
                <BrowseNoteComponent
                  user={user}
                  setUser={setUser}
                  editNoteID={editNoteID}
                  setEditNoteID={setEditNoteID}
                />
              }
            />
            <Route
              path="/edit"
              element={
                <EditNoteComponent
                  user={user}
                  setUser={setUser}
                  editNoteID={editNoteID}
                  setEditNoteID={setEditNoteID}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
