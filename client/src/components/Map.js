import GoogleMapReact from 'google-map-react';

function Map({ center, zoom, defaultCenter }) {
    return (
        <div className="map">
            <GoogleMapReact
                // DON'T PUSH TO PRODUCTION NEED TO CHANGE API KEY TO ENVIRONMENT VARIABLE
                bootstrapURLKeys={{ key: '' }}
                defaultCenter = {defaultCenter}
                center={center}
                defaultZoom={zoom}
            >

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
