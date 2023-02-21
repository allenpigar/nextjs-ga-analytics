import React from "react";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.prevenDefault;
    await fetch("/api/hello", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        pass: password,
      }),
    });
  };

  return (
    <>
      <div className="w-screen bg-blue-800 p-8"></div>
      <div className="w-screen flex align-center justify-center p-4">
        <div className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 w-full">
          <h1 className="py-4 text-lg font-semibold text-blue-800">
            Login Your Account
          </h1>
          <label className="font-semibold">Email</label>
          <br />
          <input
            type="text"
            className="p-2 border border-gray-500 outline-none rounded w-full mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <label className="font-semibold">Password</label>
          <br />
          <input
            type="password"
            className="p-2 border border-gray-500 outline-none rounded w-full mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />
          <button
            type="submit"
            className="py-2 px-4 font-semibold text-white bg-blue-800 rounded"
            onClick={(e) => handleSubmit(e)}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
