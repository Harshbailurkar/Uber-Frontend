import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function LiveTrackingForUser({ SetCurrentAddress }) {
  const [currentPosition, setCurrentPosition] = useState({ lat: 0, lng: 0 });

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const fetchAddress = async (lat, lng) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${
        import.meta.env.VITE_GOOGLE_MAPS_API_KEY
      }`
    );
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      SetCurrentAddress(data.results[0].formatted_address);
    } else {
      console.log("No address found");
    }
  };

  useEffect(() => {
    const updatePosition = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({
          lat: latitude,
          lng: longitude,
        });
        fetchAddress(latitude, longitude);
      });
    };

    updatePosition();
    const intervalId = setInterval(updatePosition, 10000);

    return () => clearInterval(intervalId);
  }, []);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <Skeleton height="100vh" />;
  }

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={currentPosition}
      zoom={15}
      options={{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
      }}
    >
      <Marker position={currentPosition} />
    </GoogleMap>
  );
}

export default LiveTrackingForUser;
