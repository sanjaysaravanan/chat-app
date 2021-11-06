/* eslint-disable */
import React from "react";
const Login = () => {
  const searchStore = () => {
    alert("API Started");
    // setState({ ..._state, searchLoading: true });
    fetch("http://localhost:2001/admin-bff/info/salesrep/store", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apiToken: "89c7fc4a1d056460cac80376ad114820",
        searchKey: "15380",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        const {
          result: [data],
        } = json;
        console.log(data);
      });
  };

  return (
    <div>
      Login
      <button type="button" onClick={searchStore}>
        Click
      </button>
    </div>
  );
};

export default Login;
