import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
      <nav className='nav'>
        <Link to='/profile' className='profile-link'>Profile</Link>
        <Link to='/authentication' className='authentication-link'>Logout</Link>
        <Link to='/newBlogPost' className='new-blog-post-link'>Write ✏️</Link>
    </nav>
  )
}

export default NavBar