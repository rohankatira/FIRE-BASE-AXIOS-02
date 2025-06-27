import React from "react";

const Login_form = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 mx-auto align-items-center">
            <form className=" shadow p-5 rounded-5">
              <h1 className="text-center mt-3 fw-bold text-primary">Employee login</h1>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-success fw-bold fs-4">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login_form;
