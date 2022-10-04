import {useState, useEffect } from 'react';

import TourList from './TourList';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState([]);
  const [isInterested, setIsInterested]  = useState(true);

  async function fetchTours(url) {
    const response = await fetch(url);
    const result = await response.json();
    setTours(result);
  }

  useEffect(() => {
    fetchTours(url);
  }, []);

  function removeTour(id) {
    setTours((oldTours) => {
      return oldTours.filter(tour => tour.id !== id);
    })
  }

  return (
    <div className="App">
      <TourList tours={tours} removeTour={removeTour}/>

    </div>
  )
}

export default App
