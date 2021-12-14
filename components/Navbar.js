import React, { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { auth } from "../firebase/clientApp";
import { signOut } from "firebase/auth";
import { getUserInfo, removeUserCookie } from "../firebase/setUserMethods";

const Navbar = () => {
  const [isLoggedin, setisLoggedin] = useState(false);

  // function for sign out
  const usersignOut = async (e) => {
    e.preventDefault();
    await signOut(auth);
    removeUserCookie();
    setisLoggedin(false);
    Router.push("/");
  };

  // getting user Info
  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      setisLoggedin(true);
    }
  });

  return (
    <div className="border-b w-full border-accent2">
      <div className="flex justify-between items-center h-12 max-w-5xl m-auto">
        
        {/* Navigation Menu  */}
        <div className="flex items-center ml-3 my-auto">
          <h1 className="text-foreground text-lg antialiased font-semibold">
            <Link href="/">Favy</Link>
          </h1>
          {isLoggedin ? (
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
          {isLoggedin ? (
            <button
              className="font-normal text-accent5 hover:text-foreground transition ease duration-100 cursor-pointer text-base"
              onClick={usersignOut}
            >
              Sign out
            </button>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
