import React from 'react'

const App = () => (
  <div>
    <h1>Fave Manager</h1>
    <ul>
      <li>header</li>
      <li>
        sidebar
        <ul>
          <li>search</li>
          <li>filter - menu</li>
        </ul>
      </li>
      <li>
        content
        <ul>
          <li>tab - menu</li>
          <li>feed - posts</li>
        </ul>
      </li>
    </ul>
  </div>
)

export default App
