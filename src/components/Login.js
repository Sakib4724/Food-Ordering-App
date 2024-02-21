// import axios from "axios";
import { useEffect, useState, useContext } from "react";
import User from "../../server/models/user";
import { useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";
// import { Provider } from "react-redux";
// import store from "../utils/store";
import { LoggedInUserContext } from "../utils/LoggedInUserContext";
import { ButtonContext } from "../utils/ButtonUserContext";

const Login = () => {
  const loggedInUserState = useContext(LoggedInUserContext);

  const buttonState = useContext(ButtonContext);

  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();

    const { email, password } = data;

    try {
      const res = await fetch("http://localhost:4000/login", {
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
        if (response.auth) {
          localStorage.setItem("user", JSON.stringify(response.user));
          localStorage.setItem("token", JSON.stringify(response.auth));
        }
        loggedInUserState.setData(response.user.name);
        buttonState.setData("Logout");
        alert("User Logged In Successfully !");
        navigate("/");
      }

      // setData({});
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async (e) => {
    try {
      const response = await fetch("http://localhost:4000/login", {
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
      {/* <LoggedInUserContext.Provider value={data.email}> */}

      <div class="form-div" className="items-center justify-center">
        {/* <p>
          {data.name} ___ {data.email} ___ {data.password}
        </p> */}

        <h1 className="text-center p-4 font-bold text-2xl ml-20">Login</h1>

        <form method="POST" onSubmit={loginUser} className="">
          <div className="flex justify-center gap-2">
            <div className="flex flex-col">
              <label className="p-1 m-2 mt-3">Email</label>
              <label className="p-1 m-2 mt-3">Password</label>
            </div>

            <div className="flex flex-col">
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

              <button
                className="text-white bg-red-900 p-2 w-20 rounded-lg hover:bg-gray-700 m-auto"
                type="submit"
                onClick={() => setUsername(data.name)}
              >
                Submit
              </button>
            </div>
          </div>
        </form>

        {/* {username != null && <h2>Hello {username} !</h2>} */}
      </div>
      {/* </LoggedInUserContext.Provider> */}
    </>
  );
};

export default Login;
