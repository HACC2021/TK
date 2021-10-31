import { Icon } from '@iconify/react';

function LocationMarker({ lat, lng, onClick, icon }) {
    return (
        <div className="location-icon" onClick={onClick}>
            <Icon icon={icon} />
        </div>
    )
}

export default LocationMarker;
