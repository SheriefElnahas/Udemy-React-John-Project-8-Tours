import Tour from "./Tour";
import Loading from "./Loading";

export default function TourList(props) {
  const toursElement = props.tours.map((tour) => {
    return (
      <Tour
        key={tour.id}
        image={tour.image}
        info={tour.info}
        name={tour.name}
        price={tour.price}
        removeTour={props.removeTour}
        id={tour.id}
      />
    );
  });

  if (props.loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <h1 className="title">
        {props.tours.length > 0 ? "Our Tours" : "No Tours Left"}
      </h1>
      <div className="underline"></div>

      {props.tours.length > 0 ? toursElement : ""}
    </main>
  );
}
