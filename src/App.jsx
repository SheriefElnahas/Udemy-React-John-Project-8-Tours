import {useState, useEffect } from 'react';

import TourList from './TourList';

const url = 'https://course-api.com/react-tours-project';

function App() {
  // async function fetchTours(url) {
  //   const response = await fetch(url);
  //   const result = await response.json();
  //   console.log(result)
  // }

  // useEffect(() => {
  //   fetchTours(url);
  // }, [])
  return (
    <div className="App">
      <TourList />
    </div>
  )
}

export default App
