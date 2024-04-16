import React from 'react';
// import BlogPage from './BlogPage'
import BlogSearch from '../BlogSearch/BlogSearch.jsx'
import '../Header/Header.css'

const Header = ({ searchTerm, setSearchTerm, passNewSearchTermFromHeaderToApp }) => {

    function passSearchTermFromBlogSearchToApp(newSearchTerm) {
        console.log("passSearchTermFromBlogSearchToApp")
        passNewSearchTermFromHeaderToApp(newSearchTerm)
    }

  return (
      <header className='header'>
          <h1>
              <span className="logo" role="img">
              💻
              </span>
          </h1>
        <BlogSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} passSearchTermFromBlogSearchToApp={passSearchTermFromBlogSearchToApp}/>
      </header>
  );
}

export default Header;