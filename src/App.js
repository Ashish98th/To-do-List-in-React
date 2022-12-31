import { useState } from "react";

import "./styles.css";

export default function App() {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data === "") return;
    setList((oldData) => [...oldData, data]);
    setData("");
  };

  const handleDelete = (id) => {
    setList((oldData) => oldData.filter((_elem, index) => index !== id));
  };

  const handleData = function (e) {
    setData(e.target.value);
  };

  return (
    <div className="app">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Enter Task:
          <input type="text" value={data} onChange={(e) => handleData(e)} />
          <input type="submit" value="Submit" />
        </label>
      </form>
      <ol>
        {list.map((item, id) => {
          return (
            <li key={id}>
              <b>{item} </b>
              <button onClick={() => handleDelete(id)}>X</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
