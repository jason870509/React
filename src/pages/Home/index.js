import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../../global/constants";
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

async function fetch_data(set_data) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  set_data(data);
}

async function fetch_set_data(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
}

const Home = () => {
  const [data, set_data] = useState([]);
  const submitting_status = useRef(false);

  useEffect(() => {
    if (!submitting_status.current) {
      return;
    }
    console.log("Change DB data.");
    fetch_set_data(data).then((data) => (submitting_status.current = false));
  }, [data]);

  useEffect(() => {
    fetch_data(set_data);
  }, []);

  return (
    <div className="app">
      <Edit add={set_data} submitting_status={submitting_status} />
      <List
        list_data={data}
        delete_data={set_data}
        submitting_status={submitting_status}
      />
    </div>
  );
};

export default Home;
