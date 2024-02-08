import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export default function AdminUpdate() {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  // console.log("params single user : ", params);
  const { authorizationToken, API } = useAuth();

  const getSingleUserData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users/${params.userId}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      // console.log("response :", response);
      const data = await response.json();
      setData(data);
      // console.log(`single user data : ${data}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  // to update the data dynamically

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${API}/api/admin/users/update/${params.userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("User updated successfully!");
      } else {
        toast.error("Failed to update user.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-update">
            <div className="container grid grid-two-cols">
              <div className="update-image">
                <img
                  src="/images/ai.png"
                  alt="login-image"
                  height="500"
                  width="500"
                />
              </div>
              <div className="update-form">
                <h1 className="main-heading mb-3">Update User Form</h1>
                <br />

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
                      value={data.username}
                      onChange={handleInput}
                    />
                    <br />
                    <br />
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={data.email}
                      onChange={handleInput}
                    />
                    <br />
                    <br />
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={data.phone}
                      onChange={handleInput}
                    />
                    <br />
                    <br />
                    <button type="submit" className="btn btn-submit">
                      Update
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
