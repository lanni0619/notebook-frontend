import axios from "axios";
const api_URL = process.env.REACT_APP_BACKEND_URL + "/note";

const noteService = {
  getToken() {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return token;
  },

  createNote(title, content) {
    let token = this.getToken();
    return axios.post(
      api_URL + "/create",
      { title, content },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  },

  browseNote(userID) {
    let token = this.getToken();
    return axios.get(api_URL + "/browse/" + userID, {
      headers: {
        Authorization: token,
      },
    });
  },

  deleteNote(noteID) {
    let token = this.getToken();
    return axios.delete(api_URL + "/delete/" + noteID, {
      headers: {
        Authorization: token,
      },
    });
  },

  getNoteByID(noteID) {
    let token = this.getToken();
    return axios.get(api_URL + "/edit/" + noteID, {
      headers: {
        Authorization: token,
      },
    });
  },

  patchNoteByID(noteID, title, content) {
    let token = this.getToken();
    return axios.patch(
      api_URL + "/edit/" + noteID,
      { title, content },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  },
};

export default noteService;
