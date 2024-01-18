import React from "react";

export default function Register() {
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/register.png"
                  alt="registration-image"
                  height="500"
                  width="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />
                <section className="section-form">
                  <form>
                    <div>
                      <label htmlFor="username">username</label>
                      <input
                        type="text"
                        name="username"
                        placeholder="username"
                        id="username"
                        required
                        autoComplete="off"
                      />
                      <label htmlFor="email">email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        id="email"
                        required
                        autoComplete="off"
                      />
                      <label htmlFor="phone">phone</label>
                      <input
                        type="number"
                        name="phone"
                        placeholder="phone"
                        id="phone"
                        required
                        autoComplete="off"
                      />
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
                        Register Now
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
