// import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "../../server/models/user";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();

    const { name, email, password } = data;

    try {
      const res = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await res.json();

      if (response.error) {
        alert(response.error);
      } else {
        // localStorage.setItem("user", JSON.stringify(response.result));
        // localStorage.setItem("token", JSON.stringify(response.auth));
        alert("User Registered Successfully !");
        navigate("/login");
      }

      // setData({});
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async (e) => {
    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "GET",
      });

      const result = await response.json();
      setUsername(result.name);
    } catch (error) {
      console.log(error);
    }
  };

  const [username, setUsername] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div class="form-div" className="items-center justify-center">
        {/* <p>
          {data.name} ___ {data.email} ___ {data.password}
        </p> */}

        <h1 className="text-center p-5 font-bold text-2xl mx-auto font-pop2">
          Register
        </h1>

        <form
          method="POST"
          onSubmit={registerUser}
          className="bg-yellow-100 w-96 mx-auto rounded-xl"
        >
          <div className="flex justify-center gap-2 p-10">
            <div className="flex flex-col">
              <label className="p-1 m-2 font-pop2 font-medium">Name</label>
              <label className="p-1 m-2 mt-3 font-pop2 font-medium">Email</label>
              <label className="p-1 m-2 mt-3 font-pop2 font-medium">Password</label>
            </div>

            <div className="flex flex-col">
              <input
                className="p-1 m-2 w-60 border-2 border-gray-300"
                type="text"
                placeholder="enter name..."
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
              />

              <input
                className="p-1 m-2 w-60 border-2 border-gray-300"
                type="email"
                placeholder="enter email..."
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />

              <input
                className="p-1 m-2 w-60 border-2 border-gray-300"
                type="password"
                placeholder="enter password..."
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
          </div>
          <div className="flex justify-center pb-5">
            <button
              className="text-white bg-red-900 p-2 w-20 rounded-lg hover:bg-gray-700 font-pop2 font-normal"
              type="submit"
              onClick={() => setUsername(data.name)}
            >
              Submit
            </button>
          </div>
        </form>

        {/* {username != null && <h2>Hello {username} !</h2>} */}
      </div>
    </>
  );
};

export default Register;
