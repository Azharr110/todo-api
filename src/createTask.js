import { useState } from "react";
import axios from "axios";

export default () => {
  const [book, setBook] = useState();

  const postTask = () => {
    axios
      .post("/api/tasks", {
        title: book,
      })
      .then((response) => {
        // setBook(response.book);
        // console.log(response.book, "Task");
      })
      .catch((e) => {
        console.log("e", e);
      });
  };

  return (
    <div className="body">
      <input
        type="text"
        onChange={(e) => {
          setBook(e.target.value);
          console.log(e.target.value);
        }}
      ></input>
      <br></br>
      <br></br>
      <br></br>
      <button
        onClick={(e) => {
          console.log(postTask(), "name");
        }}
      >
        Enter Data
      </button>
    </div>
  );
};
