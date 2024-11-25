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
                console.log('Fetch attempt finished')})},
     []); // Empty dependency array: Runs only once when the component mounts

    return (
        <div>
            <h2>Tours We Offer</h2>
            <ul>
                {tours.map(tour => (
                    <li key={tour.id}>
                        {tour.name}: ${tour.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Gallery