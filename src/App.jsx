import { useState, useEffect } from "react";

import TourList from "./TourList";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchTours(url) {
    setIsLoading(true);
    const response = await fetch(url);
    const result = await response.json();
    setIsLoading(false);
    setTours(result);
  }

  useEffect(() => {
    fetchTours(url);
  }, []);

  function removeTour(id) {
    setTours((oldTours) => {
      return oldTours.filter((tour) => tour.id !== id);
    });
  }
  if (tours.length === 0 && !isLoading) {
    return (
      <main>
        <h1 className="title">No Trip List</h1>
        <div className="underline"></div>
        <button className="btn" onClick={() => fetchTours(url)}>Refresh</button>


      </main>
    );
  } else {
    return (
      <div className="App">
        <TourList tours={tours} removeTour={removeTour} loading={isLoading} />
      </div>
    );
  }
}

export default App;
