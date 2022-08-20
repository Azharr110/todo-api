import { useState } from "react";
import axios from "axios";

export default () => {
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

  return (
    <div className="data-body">
      <button
        onClick={(e) => {
          console.log(fetchtask());
        }}
      >
        More data
      </button>
      {data.map((item) => {
        return <div>{item.title}</div>;
      })}{" "}
    </div>
  );
};
