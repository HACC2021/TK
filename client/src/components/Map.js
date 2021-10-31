import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';

function Map({ center, zoom, defaultCenter }) {
    return (
        <div className="map">
            <GoogleMapReact
                // DON'T PUSH TO PRODUCTION NEED TO CHANGE API KEY TO ENVIRONMENT VARIABLE
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API }}
                defaultCenter = {defaultCenter}
                center={center}
                defaultZoom={zoom}
            >
                {center ? <LocationMarker icon="mdi:map-marker-account" lat={center.lat} lng={center.lng} /> : null }
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    defaultCenter: {
        lat: 21.30694,
        lng: -157.85833
    },
    zoom: 12
}

export default Map;
