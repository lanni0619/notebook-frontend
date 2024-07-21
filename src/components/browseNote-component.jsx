import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteService from "../services/note.service";

const BrowseNoteComponent = ({ user, setUser, editNoteID, setEditNoteID }) => {
  let [notes, setNotes] = useState("");
  let [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (user) {
      browseNote();
    }
  }, []);

  const browseNote = async () => {
    try {
      let response = await NoteService.browseNote(user._id);
      setNotes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (e) => {
    try {
      let response = await NoteService.deleteNote(e.target.id);
      window.alert(response.data.msg);
      window.location.reload();
    } catch (error) {
      setMsg(error);
    }
  };

  const editNote = async (e) => {
    setEditNoteID(e.target.id);
    navigate("/edit");
  };

  const taiwanTime = (input) => {
    const date = new Date(input);
    return new Intl.DateTimeFormat("zh-TW", {
      timeZone: "Asia/Taipei",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date);
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
          <h2>Browse your Note</h2>
        </div>
      )}
      <br />
      {user && notes && notes.length !== 0 && (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {notes.map((note, index) => {
            return (
              <div
                className="card"
                key={index}
                style={{
                  width: "18rem",
                  margin: "1rem",
                  maxWidth: "300px",
                  maxHeight: "250px",
                  overflow: "auto",
                }}
              >
                <h5 className="card-header" style={{ color: "navy" }}>
                  {note.title}
                </h5>
                <div className="card-body">
                  <p
                    className="card-text"
                    style={{ margin: "0.5rem 0rem", color: "gray" }}
                  >
                    {note.content}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                    marginBottom: "0.5rem",
                  }}
                >
                  <button
                    id={note._id}
                    onClick={editNote}
                    className="btn btn-warning btn-sm"
                  >
                    edit
                  </button>
                  <button
                    id={note._id}
                    onClick={deleteNote}
                    className="btn btn-secondary btn-sm"
                  >
                    delete
                  </button>
                </div>
                <div className="card-footer text-muted">
                  {taiwanTime(note.time)}
                </div>
              </div>
            );
          })}
        </div>
      )}
      <br />
      {msg && (
        <div className="bg-danger p-2 text-dark bg-opacity-50">{msg}</div>
      )}
    </div>
  );
};

export default BrowseNoteComponent;
