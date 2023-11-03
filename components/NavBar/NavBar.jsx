"use client"

import Link from 'next/link'
import UserLogin from "../UserLogin/UserLogin";
import './NavBar.css'

export default function NavBar() {
    return (
        <div className="navContainer">
            <Link className='navVenturo' href="/" style={{textDecoration: 'none'}}>Venturo</Link>
            <Link className='navItem' href="/blogs" style={{textDecoration: 'none'}}>Blogs</Link>
            {/* <Link className='navItem' href="/locations" style={{textDecoration: 'none'}}>Locations</Link> */}
            <Link className='navItem' href="/collections" style={{textDecoration: 'none'}}>Collections</Link>
            <UserLogin />
        </div>
    )
}