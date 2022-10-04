import Tour from "./Tour";

import { useState, useEffect } from "react";
const url = "https://course-api.com/react-tours-project";

export default function TourList() {
  const [tours, setTours] = useState([]);

  async function fetchTours(url) {
    const response = await fetch(url);
    const result = await response.json();
    setTours(result);
  }

  useEffect(() => {
    fetchTours(url);
  }, []);

  const toursElement = tours.map((tour) => {
    return <Tour key={tour.id} image={tour.image} info={tour.info} name={tour.name} price={tour.price} />
  })

  return (
    <main>
        <h1 className="title">Our Tours</h1>
        <div className="underline"></div>
        {toursElement}
    </main>
  );
}
