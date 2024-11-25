//Task 1: Creation of Gallery.jsx
import {useState, useEffect} from "react";

function Gallery() {
const [tours,setTours] = useState([])

    useEffect(() => {
        fetch('https://www.course-api.com/react-tours-project')
            .then(response => response.json())
            .then(data => {
                setTours(data)})
            .catch(error => {
                console.error('Error fetching tours data:', error)})
            .finally(() => {
                console.log('Fetch attempt completed successfully')})},
     []); 

       // Function to handle removing a tour from the list
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };
    // Function to handle toggling the description
    const toggleDescription = (id) => {
      setTours(tours.map((tour) => {
        if (tour.id === id) {
          return { ...tour, showDescription: !tour.showDescription };
        }
        return tour;
      }));
    };

    return (
        <div>
      <h2>Tours We Offer</h2>
      <div>
        {tours.length === 0 ? (
          <p>Loading...</p> // Show a loading message if there are no tours yet
        ) : (
          tours.map(tour => (
            <div key={tour.id}>
              <img src={tour.image} alt={tour.name} />
              <p>{tour.name}</p>
              <p>${tour.price}</p>
              <button onClick={() => removeTour(tour.id)}>Not Interested</button>
              <div>
                <button onClick={() => toggleDescription(tour.id)}>
                  {tour.showDescription ? "Show Less" : "Read More"}
                </button>
                {tour.showDescription && <p>{tour.info}</p>}
              </div>
            </div>
          ))
          
        )}
      </div>
    </div>
  );
}
export default Gallery