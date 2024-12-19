
import './App.css';

import Navbar from "./components/Navbar.js";
import Trip from './components/Trip.js';
import data from './data.js'

function App() {
  const trips = data.map((trip) => {
    return <Trip 
            key = {trip.id}
            country = {trip.country}
            place = {trip.place}
            startDate = {trip.startDate}
            endDate = {trip.endDate}
            description = {trip.description}
            picture = {trip.picture}
           />
  })

  return (
    <div className="container">
      <Navbar />
      <section className="trips-list">
        {trips}
      </section>
    </div>
  );
}

export default App;
