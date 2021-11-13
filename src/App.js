import React from 'react';
import Search2 from './Search2';
import BookData from'./Data.json'
function App() {
  return (
    <div>
      <Search2 placeholder='Enter a book name' data={BookData} />
    </div>
  )
}

export default App

