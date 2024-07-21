import React from "react";

const HomeComponent = () => {
  return (
    <main>
      <div className="container py-4">
        <div className="p-2 mb-4 bg-secondary rounded-3">
          <div className="container-fluid py-5 text-white">
            <h1 className="display-5 fw-bold">NoteBook APP</h1>
            <p className="col-md-8 fs-4">
              註冊帳號後即可撰寫您的個人筆記，您的筆記內容都受到帳號個別保護，隨時可登入進行瀏覽、編輯、刪除。
            </p>
            <button className="btn btn btn-dark" type="button">
              <a
                href="https://github.com/lanni0619/MERN-02-Notebook"
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                SOURCE CODE (github)
              </a>
            </button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-dark bg-info rounded-3">
              <h2>FRONT-END</h2>
              <p>Use React to build SPA (Single Page Application)</p>
              {/* <button className="btn btn-dark" type="button">
                btn-outline-light
              </button> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-warning border rounded-3">
              <h2>BACK-END</h2>
              <p>Restful API</p>
              <p>Use ODM to CRUD MongoDB</p>
              <p>Authorization(JWT) / authentication(Oauth)</p>
              {/* <button className="btn btn-dark" type="button">
                btn-outline-secondary
              </button> */}
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; 2024 Roy Wang
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;
