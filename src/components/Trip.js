export default function Trip({country, place, startDate, endDate, description, picture}) {
    
    // Helper function to configure the date format from the date object in the data
    const formatDate = ((date => {
        const options = {day: '2-digit', month: 'short', year: 'numeric'};
        return date.toLocaleDateString('en-US', options);
    }))

    return (
        <div className="trip--container">
            <img src= {picture} className="trip--picture"></img>
            <div>
                <div className="trip--location-container">
                    <img src="img/location-icon.png" className="trip-location-icon"></img>
                    <h3>{country}</h3>
                    <a>View on Google Maps</a>
                </div>
                <h1>{place}</h1>
                <h2>{`${formatDate(startDate)} - ${formatDate(endDate)}`}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}