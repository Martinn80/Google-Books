import React, { useState, useEffect } from 'react';


function App() {
  const [book, setBook] = useState('')
  return (
    <div className="App">
      <h1>Google Books</h1>
      <input onChange={(e) => console.log(e.target.value)} className="form-control" type="text" />
      <button className="btn btn-primary">Submit</button>
    </div>
  );
}

export default App;
