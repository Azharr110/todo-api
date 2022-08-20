import { useEffect, useState } from "react";
import axios from "axios";
import CreateTask from "./createTask";
import Data from "./data";

export function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState([]);

  const fetchtask = () => {
    axios
      .get("/api/tasks")
      .then((response) => {
        setData(response.data);
        console.log(response.data, "Task");
      })
      .catch((e) => {
        console.log("e", e);
      });
  };

  const handleApi = () => {
    console.log({ email, password });
    axios
      .post("/api/authenticate", {
        username: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data.id_token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${result.data.id_token}`;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const obj = {
    email: email,
    password: password,
  };
  return (
    <>
      {" "}
      <div className="body">
        <div>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
              // console.log(e.target.value);
            }}
          />{" "}
          <br /> <br />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br /> <br />
          <button
            onClick={() => {
              handleApi();
              console.log(obj);
            }}
          >
            Login
          </button>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
      <Data />
      <CreateTask />{" "}
    </>
  );
}

export default Login;
