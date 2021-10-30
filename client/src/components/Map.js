import GoogleMapReact from 'google-map-react';

function Map({ center, zoom }) {
    return (
        <div className="map">
            <GoogleMapReact
                // DON'T PUSH TO PRODUCTION NEED TO CHANGE API KEY TO ENVIRONMENT VARIABLE
                bootstrapURLKeys={{ key: 'AIzaSyA8gq3Vhq9KBbCIr95QUHGgD7iBqiitgYs' }}
                center={ center }
                defaultZoom={ zoom }
            >

            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    zoom: 12
}

export default Map;
