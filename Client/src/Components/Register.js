import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setconfPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        confPassword: confPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.error(data.error);
      });
  };
  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 border">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
      </div>
      <form
        novalidate=""
        action=""
        className="space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div>
            <label for="email" className="block mb-2 text-sm font-bold">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
              placeholder="abc@yahoo.com"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label for="password" className="text-sm font-bold">
                Password
              </label>
            </div>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
              placeholder="******"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label for="password" className="text-sm font-bold">
                Confirm Password
              </label>
            </div>
            <input
              type="password"
              onChange={(e) => setconfPassword(e.target.value)}
              name="confPassword"
              id="confPassword"
              placeholder="******"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="button"
              onClick={signIn}
              className="w-full px-8 py-3 font-semibold rounded-md bg-red-300"
            >
              Sign Up
            </button>
          </div>
          <p className="px-6 text-sm text-center">
            Already have an account yet?
            <Link
              to="/"
              rel="noopener noreferrer"
              href="#"
              className="hover:underline text-blue-800"
            >
              Sign In
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
