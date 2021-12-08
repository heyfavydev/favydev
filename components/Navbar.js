import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div>
            <div className="flex h-12 bg-gray-900 items-center">
                <h1 className="text-white text-3xl ml-5"><Link href="/"> Favlent </Link></h1>
                <ul className="flex ml-5 text-2x1 text-white">
                    <li className="my-2 p-4 hover:text-gray-400 transition ease duration-300"><Link href="/dashboard">Dashboard</Link></li>
                    <li className="my-2 p-4 hover:text-gray-400 transition ease duration-300"><Link href="/blogs">Blogs</Link></li>
                    <li className="my-2 p-4 hover:text-gray-400 transition ease duration-300"><Link href="/design">Design</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
