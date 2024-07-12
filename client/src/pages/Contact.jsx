import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [contact, setContact] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true);

  const { user, API } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(contact);

    try {
      const response = fetch(`${API}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        const data = (await response).json();
        console.log(data);
      }
      toast.success("Message has been sent...");
    } catch (error) {
      console.log(`Contact Form Page Error : ${error}`);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img
                  src="/images/support.png"
                  alt="we are always ready to help"
                  height="500"
                  width="500"
                />
              </div>
              <div className="login-form">
                <h1 className="main-heading mb-3">Contact us</h1>
                <br />

                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="mb-4">
                    <label htmlFor="username" className="block">
                      username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="off"
                      value={contact.username}
                      onChange={handleInput}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block">
                      email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      value={contact.email}
                      onChange={handleInput}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="block">
                      message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      autoComplete="off"
                      value={contact.message}
                      onChange={handleInput}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                      cols="30"
                      rows="6"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
      ;
    </>
  );
}
