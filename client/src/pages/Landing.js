import { useEffect, useState } from "react";
import Map from "../components/Map";
import TopRatedTrails from "../components/TopRatedTrails";

function Landing() {

    const [location, setLocation] = useState();

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
            });
        } else {
            setLocation({ lat: 21.30694, lng: -157.85833 });
            alert("Geolocation is not supported on this browser");
        }
    }, [])

    return (
        <div>
            <Map center={location} />
            <TopRatedTrails />
        </div>
    )
}

export default Landing;

