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
     []); // Empty dependency array: Runs only once when the component mounts

    return (
        <div>
      <h2>Tours We Offer</h2>
      <div>
        {tours.length === 0 ? (
          <p>Loading...</p> // Show a loading message if there are no tours yet
        ) : (
          tours.map(tour => (
            <div key={tour.id}>
              {/* Render the image and the tour details */}
              <img src={tour.image} alt={tour.name} />
              <p>{tour.name}</p>
              <p>${tour.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Gallery