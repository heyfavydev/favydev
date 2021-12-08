import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between h-11 bg-white items-center shadow-md">
      {/* Navigation Menu  */}
      <div className="flex items-center">
        <h1 className="text-gray-700 text-xl ml-5 antialiased font-semibold mb-1">
          <Link href="/"> Favy </Link>
        </h1>
        {session ? (
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
        ) : (
          ""
        )}
      </div>

      {/* Sign in Sign up buttons */}
      <div className="flex">
        {!session ? (
          <>
            <button
              onClick={signIn}
              className="p-3 font-semibold text-gray-500 hover:text-gray-900 transition ease duration-200 cursor-pointer text-xl"
            >
              Sign in
            </button>
          </>
        ) : (
          <button
            onClick={signOut}
            className="p-3 font-semibold text-gray-500 hover:text-gray-900 transition ease duration-200 cursor-pointer text-xl"
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
