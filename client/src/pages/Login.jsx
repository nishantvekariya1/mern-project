import React from "react";

export default function Login() {
  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img
                  src="/images/login.png"
                  alt="login-image"
                  height="500"
                  width="500"
                />
              </div>
              <div className="login-form">
                <h1 className="main-heading mb-3">Login Form</h1>
                <br />

                <form>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      id="email"
                      required
                      autoComplete="off"
                    />
                    <br />
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                    />
                    <br />
                    <button type="submit" className="btn btn-submit">
                      Login Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
