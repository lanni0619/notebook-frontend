import React, { useEffect, useState } from "react";
import NoteService from "../services/note.service";
import { useNavigate } from "react-router-dom";

const EditNoteComponent = ({ user, setUse, editNoteID, setEditNoteID }) => {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // get note from server to edit
    if (user && editNoteID) {
      getNote();
    }
  }, []);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const getNote = async () => {
    try {
      let response = await NoteService.getNoteByID(editNoteID);
      setTitle(response.data.title);
      setContent(response.data.content);
      console.log(response);
    } catch (error) {
      setMsg(error.response.data.details[0].message);
    }
  };
  const handleEdit = async () => {
    try {
      await NoteService.patchNoteByID(editNoteID, title, content);
      window.alert("edit successfully");
      navigate("/browse");
    } catch (error) {
      console.log(error);
      setMsg(error.response.data.details[0].message);
    }
  };

  return (
    <div style={{ padding: "3rem" }}>
      <h2>Edit Note Page</h2>
      <br />
      {user && !editNoteID && <p>You don't have note to edit.</p>}
      {user && editNoteID && (
        <div className="form-group">
          <label htmlFor="exampleforTitle">Title：</label>
          <input
            onChange={handleTitle}
            name="title"
            type="text"
            className="form-control"
            id="exampleforTitle"
            value={title}
          />
          <br />
          <label htmlFor="exampleforContent">Content：</label>
          <textarea
            onChange={handleContent}
            className="form-control"
            id="exampleforContent"
            aria-describedby="emailHelp"
            name="content"
            value={content}
          />
          <br />
          <button onClick={handleEdit} className="btn btn-primary">
            Edit
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

export default EditNoteComponent;
