import React from 'react'



const BlogSearch = ({searchTerm, setSearchTerm, passSearchTermFromBlogSearchToApp}) => {

    const handleSearch = (e) => {
        console.log(e)
        const newSearchTerm = e.target.value
        passSearchTermFromBlogSearchToApp(newSearchTerm)
    }


  return (
    <div className="searchbar">
      {/* <label>Search Blog Posts</label> */}
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeholder="Search"
        onChange={(e) => handleSearch(e)}
      />
      </div>
  )
}

export default BlogSearch