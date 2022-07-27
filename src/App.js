import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const api = axios.create({
  baseURL: "https://microservice-identitymanagement.azurewebsites.net"
});

const data = {
  email: "system@smls.io",
  password: "321Pa$$word!"
};

export default function App() {
  const [consoleLog, setConsoleLog] = useState("");

  useEffect(() => {
    api
      .post("/api/identity/token", data)
      .then((res) => {
        console.log(`Status: ${res.status}`, res.data);
        setConsoleLog("OK");
      })
      .catch((err) => {
        setConsoleLog("err");
        console.error(err.response.message, err.response.headers);
      });
  }, [data]);

  return <div className="App">{consoleLog}</div>;
}