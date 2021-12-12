import React, { useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { auth } from "../firebase/clientApp";
import { signOut } from "firebase/auth";
import jsCookie from "js-cookie";

const Navbar = () => {
  // function for sign out
  const usersignOut = async (e) => {
    e.preventDefault();
    await signOut(auth);
    jsCookie.remove("user");
    Router.push("/");
  };

  return (
    <div className="border-b w-full border-accent2">
      <div className="flex justify-between items-center h-12 max-w-5xl m-auto">
        {/* Navigation Menu  */}
        <div className="flex items-center ml-3 my-auto">
          <h1 className="text-foreground text-lg antialiased font-semibold">
            <Link href="/">Favy</Link>
          </h1>
          {jsCookie.get("user") ? (
            <ul className="flex ml-8 text-accent5 antialiased font-medium m-auto gap-3">
              <Link href="/dashboard">
                <li className="hover:text-foreground transition ease duration-100 cursor-pointer text-base py-3">
                  Dashboard
                </li>
              </Link>
              <Link href="/blogs">
                <li className="hover:text-foreground transition ease duration-100 cursor-pointer text-base py-3">
                  Blogs
                </li>
              </Link>
              <Link href="/design">
                <li className="hover:text-foreground transition ease duration-100 cursor-pointer text-base py-3">
                  Design
                </li>
              </Link>
            
            </ul>
          ) : (
            ""
          )}
        </div>

        {/* Sign in Sign up buttons */}

        <div className="flex mr-3 my-auto">
          {!jsCookie.get("user") ? (
            <>
              <Link href="/login">
                <button className="mr-3 font-normal text-accent5 hover:text-foreground transition ease duration-100 cursor-pointer text-base">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="font-normal text-accent5 hover:text-foreground transition ease duration-100 cursor-pointer text-base">
                  Sign up
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
