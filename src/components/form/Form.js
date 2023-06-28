import React, { useState } from "react";

export const Form = () => {
  const [inputValue, setValue] = useState("");
  const [styled, setstyled] = useState({});
  const [err, setErr] = useState("");

  const formChangeHandler = (e) => {
    e.preventDefault();
    let style = {};
    if (inputValue === "") {
      style = {
        border: "1px solid red",
      };
    } else {
      style = {
        border: "1px solid green",
      };
    }

    setstyled(style);
  };

  const changeNameHandler = (e) => {
    let elInputName = e.target.name;
    let elInputValue = e.target.value;
    // let err = "";
    let a = { [elInputName]: elInputValue };

    let style = {};
    if (a[elInputName] === "") {
      style = {
        border: "1px solid red",
      };
      setErr("Iltimos qiymat kiriting");
    } else {
      style = {
        border: "1px solid green",
      };
    }
    setstyled(style);
    setValue(elInputValue);
  };

  console.log(inputValue);
  return (
    <form onSubmit={formChangeHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          onChange={changeNameHandler}
          style={styled}
          type="text"
          name="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <p style={{ color: "red" }}>{err}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          // onChange={changeNameHandler}
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
