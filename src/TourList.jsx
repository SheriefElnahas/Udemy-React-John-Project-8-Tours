import Tour from "./Tour";

export default function TourList(props) {
  const toursElement = props.tours.map((tour) => {
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
