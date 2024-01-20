import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function Register() {
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      // console.log(response);
      const res_data = await response.json();

      if (response.ok) {
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        storeTokenInLS(res_data.token);
        alert("Registration Completed...");
        navigate("/");
      } else {
        alert(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log(`Regitration Error : ${error}`);
    }
  };

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
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="username">username</label>
                      <input
                        type="text"
                        name="username"
                        placeholder="username"
                        id="username"
                        required
                        autoComplete="off"
                        value={user.username}
                        onChange={handleInput}
                      />
                      <label htmlFor="email">email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        id="email"
                        required
                        autoComplete="off"
                        value={user.email}
                        onChange={handleInput}
                      />
                      <label htmlFor="phone">phone</label>
                      <input
                        type="number"
                        name="phone"
                        placeholder="phone"
                        id="phone"
                        required
                        autoComplete="off"
                        value={user.phone}
                        onChange={handleInput}
                      />
                      <label htmlFor="password">password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        id="password"
                        required
                        autoComplete="off"
                        value={user.password}
                        onChange={handleInput}
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
