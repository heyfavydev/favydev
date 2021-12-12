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
    <div className="border-b w-full border-accent2">
    <div className="flex justify-between items-center h-10 max-w-5xl m-auto">
      {/* Navigation Menu  */}
      <div className="flex items-center ml-3 my-auto">
        <h1 className="text-foreground text-lg antialiased font-semibold">
          <Link href="/">Favy</Link>
        </h1>
        {!auth.currentUser ? (
          ""
        ) : (
          <ul className="flex ml-8 text-accent5 antialiased font-medium m-auto gap-3">
            <li className="hover:text-foreground transition ease duration-100 cursor-pointer text-base">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="hover:text-foreground transition ease duration-100 cursor-pointer text-base">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className="hover:text-foreground transition ease duration-100 cursor-pointer text-base">
              <Link href="/design">Design</Link>
            </li>
          </ul>
        )}
      </div>

      {/* Sign in Sign up buttons */}
      <div className="flex mr-3 my-auto">
        {!auth.currentUser ? (
          <>
            <Link href="/login">
              <button className="mr-3 font-normal text-accent5 hover:text-foreground transition ease duration-100 cursor-pointer text-base">
                Sign in
              </button>
            </Link>
            <Link href="/register">
              <button className="font-normal text-accent5 hover:text-foreground transition ease duration-100 cursor-pointer text-base">
                Register
              </button>
            </Link>
          </>
        ) : (
          <button
            className="font-normal text-accent5 hover:text-foreground transition ease duration-100 cursor-pointer text-base"
            onClick={usersignOut}
          >
            Sign out
          </button>
        )}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
