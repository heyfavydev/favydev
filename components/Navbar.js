import React from "react";
import Link from "next/link";
import Router from "next/router";
import { auth } from "../firebase/clientApp";
import { signOut } from "firebase/auth";

const Navbar = () => {
  // function for sign out
  const usersignOut = async (e) => {
    e.preventDefault();
    await signOut(auth);
    Router.push("/");
  };

  return (
    <div className="flex justify-between h-11 bg-white items-center shadow-md">
      {/* Navigation Menu  */}
      <div className="flex items-center">
        <h1 className="text-gray-700 text-xl ml-5 antialiased font-semibold mb-1">
          <Link href="/"> Favy </Link>
        </h1>
        {!auth.currentUser ? (
          ""
        ) : (
          <ul className="flex ml-3 text-base text-gray-500 antialiased font-medium">
            <li className="my-2 p-2 hover:text-gray-900 transition ease duration-300">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="my-2 p-2 hover:text-gray-900 transition ease duration-300">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className="my-2 p-2 hover:text-gray-900 transition ease duration-300">
              <Link href="/design">Design</Link>
            </li>
          </ul>
        )}
      </div>

      {/* Sign in Sign up buttons */}
      <div className="flex">
        {!auth.currentUser ? (
          <>
            <Link href="/login">
              <button className="p-3 font-semibold text-gray-500 hover:text-gray-900 transition ease duration-200 cursor-pointer text-xl">
                Sign in
              </button>
            </Link>
            <Link href="/register">
              <button className="p-3 font-semibold text-gray-500 hover:text-gray-900 transition ease duration-200 cursor-pointer text-xl">
                Register
              </button>
            </Link>
          </>
        ) : (
          <button
            className="p-3 font-semibold text-gray-500 hover:text-gray-900 transition ease duration-200 cursor-pointer text-xl"
            onClick={usersignOut}
          >
            Sign out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
