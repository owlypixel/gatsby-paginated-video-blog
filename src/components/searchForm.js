import React from "react"
import { navigate } from "gatsby"

const SearchForm = ({ query }) => (
  <form role="search" method="GET" onSubmit={event => event.preventDefault()}>
    <label htmlFor="search-input">
      <h2>Search the blog</h2>
    </label>
    <input
      type="search"
      id="search-input"
      name="keywords"
      aria-controls="search-results-count"
      onChange={e =>
        navigate(`/search?keywords=${encodeURIComponent(e.target.value)}`)
      }
      value={query}
      placeholder="i.e. Electric Bike"
    />
  </form>
)

export default SearchForm