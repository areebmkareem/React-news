import React from "react";

const Playground = () => {
  React.useEffect(() => {
    fetch("https://circle-alpha-api.herokuapp.com/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: "areeb", email: "sugu@gmail.com", password: "arkoppa" })
    })
      .then(response => response.json())
      .then(jsondata => console.log(jsondata))
      .catch(err => console.log(err, "ERROR"));
  });
  return <h6>asdsad</h6>;
};

export default Playground;
