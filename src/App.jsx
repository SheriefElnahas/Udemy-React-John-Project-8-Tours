import {useState, useEffect } from 'react';

import TourList from './TourList';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState([]);

  async function fetchTours(url) {
    const response = await fetch(url);
    const result = await response.json();
    setTours(result);
  }

  useEffect(() => {
    fetchTours(url);
  }, []);

  return (
    <div className="App">
      <TourList tours={tours}/>
    </div>
  )
}

export default App
