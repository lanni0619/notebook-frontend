import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteService from "../services/note.service";

const CreateComponent = ({ user, setUser }) => {
  const navigate = useNavigate();

  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let [msg, setMsg] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleNote = async () => {
    try {
      let createNote = await NoteService.createNote(title, content);
      window.alert(createNote.data.msg);
      navigate("/browse");
    } catch (error) {
      console.log(error);
      setMsg(error.response.data);
    }
  };

  const handleTakeToLogin = () => {
    navigate("/login");
  };

  return (
    <div style={{ padding: "3rem" }}>
      {!user && (
        <div>
          <p>You should login your account first!</p>
          <button
            className="btn btn-primary btn-5g"
            onClick={handleTakeToLogin}
          >
            Login Page
          </button>
        </div>
      )}

      {user && (
        <div className="form-group">
          <label htmlFor="exampleforTitle">Title：</label>
          <input
            onChange={handleTitle}
            name="title"
            type="text"
            className="form-control"
            id="exampleforTitle"
          />
          <br />
          <label htmlFor="exampleforContent">Content：</label>
          <textarea
            onChange={handleContent}
            className="form-control"
            id="exampleforContent"
            aria-describedby="emailHelp"
            name="content"
          />
          <br />
          <button onClick={handleNote} className="btn btn-primary">
            Submit
          </button>
          <br />
          <br />
          {msg && (
            <div className="bg-danger p-2 text-dark bg-opacity-50">{msg}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreateComponent;
