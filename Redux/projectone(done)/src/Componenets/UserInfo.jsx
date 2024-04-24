import React, { useState } from "react";

export const UserInfowithUseState = () => {
  const [user, setUser] = useState({
    name: "",
    age: "0",
    hobbies: []
  });
  console.log(user);
  return (
    <div>
      <h1>Form Info</h1>

      <input
        className={"border border-purple-300 m-30"}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
      <br />
      <input
        className={"border border-purple-300 m-30"}
        onChange={(e) => setUser({ ...user, age: e.target.value })}
        type="text"
        name="age"
        id="age"
        placeholder="age"
      />
      <br />
      <input
        className={"border border-purple-300 m-30"}
        type="text"
        onBlur={(e) =>
          setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
        }
        name="hobbies"
        id="hobbies"
        placeholder="hobbies"
      />
      <br />
      <button type="submit">Submit</button>
    </div>
  );
};
