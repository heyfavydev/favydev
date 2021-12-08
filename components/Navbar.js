import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div>
            <div className="flex h-11 bg-white items-center text border-b border-gray-300">
                <h1 className="text-gray-700 text-xl ml-5 antialiased font-semibold"><Link href="/"> Favy </Link></h1>
                <ul className="flex ml-3 text-base text-gray-500 antialiased font-medium">
                    <li className="my-2 p-2 hover:text-gray-900 transition ease duration-300"><Link href="/dashboard">Dashboard</Link></li>
                    <li className="my-2 p-2 hover:text-gray-900 transition ease duration-300"><Link href="/blogs">Blogs</Link></li>
                    <li className="my-2 p-2 hover:text-gray-900 transition ease duration-300"><Link href="/design">Design</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
