/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import { simpleAXIOS, AXIOS2, fetchReq, hs } from "./api/httpUtilities";

const Tester = () => {
  const loginRef = useRef();
  const pwdRef = useRef();

  const [consoleLog, setConsoleLog] = useState("");

  // const { auth, setAuth } = useAuth();
  // const api = useAPI();

  const postVar = { email: 'system@smls.io', password: "321Pa$$word!" }
  // hs(postVar);
  fetchReq();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // const email = loginRef.current.value;
      // const password = pwdRef.current.value;

      switch ("hs") {
        case "sAxios":
          simpleAXIOS(postVar);
          break;
        case "axios2":
          AXIOS2(postVar);
          break;
        case "fetch":
          fetchReq(postVar);
          break;
        case "hs":
          hs(postVar);
          break;
        default:
          break;
      }
      
      // setAuth(decodedToken)

    } catch (err) {
      console.log("handleLogin Error", err);
      // setConsoleLog( )
    }
  };

  const onValueChange = () => {
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="loginid">Login ID</label>
        <input
          ref={loginRef}
          onChange={onValueChange}
          id="loginid"
          name="loginid"
          placeholder="login id"
          value="system@smls.io"
          required
        />
      </div>

      <div>
        <label htmlFor="pwd">Password</label>
        <input
          ref={pwdRef}
          onChange={onValueChange}
          id="pwd"
          name="pwd"
          type="password"
          value="321Pa$$word!"
          required
        />
      </div>

      <button type="submit">Login</button>

      {/* {auth && <div>auth</div>}

      {!auth && <div>not auth</div>} */}

      <div>
        { consoleLog }
      </div>
    </form>
  );
};
export default Tester;
