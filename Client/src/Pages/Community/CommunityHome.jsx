import React from "react";

const CommunityHome = () => {
  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <div className="row">
        <div className="col-12">
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Search..."
          />
        </div>
      </div>
      
      <div className="row">
        <div className="col-12">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://messengernews.fb.com/wp-content/uploads/2022/09/Community-Chats-Chat-Types-UPDATED.png?w=1024"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">COMMUNITY NAME</h5>
                  <p className="card-text">
                    A short descption of cmmunity and bla bla bla.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">CREATED BY:</small> <br />
                    <small className="text-muted">TOTAL MEMBERS:</small>
                  </p>
                </div>
                <button
                  type="button"
                  class="btn btn-primary mb-2"
                  style={{ marginLeft: "1%" }}
                >
                  JOIN COMMUNITY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://messengernews.fb.com/wp-content/uploads/2022/09/Community-Chats-Chat-Types-UPDATED.png?w=1024"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">COMMUNITY NAME</h5>
                  <p className="card-text">
                    A short descption of cmmunity and bla bla bla.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">CREATED BY:</small> <br />
                    <small className="text-muted">TOTAL MEMBERS:</small>
                  </p>
                </div>
                <button
                  type="button"
                  class="btn btn-primary mb-2"
                  style={{ marginLeft: "1%" }}
                >
                  JOIN COMMUNITY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHome;
