import React, { useRef, useState } from 'react'
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import { Button, Typography } from '@mui/material';

const containerStyle = {
  minHeight: '70vh',
  minWidth: '40vh'
};

const center = {
    lat: 44.7291646118394,
    lng: 22.401645011656814,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: //Google_Maps_Key
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    //map.setZoom(10);
    setTimeout(() => {
      map.setZoom(15);
    }, 1000);
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const markerRef = useRef(null);
  const [isMarker, setIsMarker] = useState(false);

  const handleOpenGoogleMaps = () => {
    const latitude = center.lat;
    const longitude = center.lng;
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(mapsUrl, '_blank');
  };

  const RestaurantAddress = () => {
    return (
    <>
      <h4>WOK Restaurant</h4>
      <p>Bulevardul 1 Decembrie 1918</p>
      <p>10</p>
      <p>Orșova</p>
      <p>225200</p>
      <p>România</p>
    </>)
  }

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        yesIWantToUseGoogleMapApiInternals
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false
        }}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={center} title='WOK Restaurant' onClick={() => setIsMarker(true)}>
        {isMarker &&
        <InfoWindow anchor={markerRef.current}
        onCloseClick={() => setIsMarker(false)}>
        <div>
          <RestaurantAddress />
          <Button onClick={handleOpenGoogleMaps}>Open in Google Maps</Button>
        </div>
        </InfoWindow>
        }
        </Marker>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)