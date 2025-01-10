import React, { useEffect, useRef } from "react";

function MapAndRoute({ pickupLocation, destination, onChooseVehicle }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.google) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 0, lng: 0 },
        zoom: 13,
      });

      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);

      const geocoder = new window.google.maps.Geocoder();

      geocoder.geocode({ address: pickupLocation }, (results, status) => {
        if (status === "OK") {
          const pickupCoords = results[0].geometry.location;

          geocoder.geocode({ address: destination }, (results, status) => {
            if (status === "OK") {
              const destinationCoords = results[0].geometry.location;

              directionsService.route(
                {
                  origin: pickupCoords,
                  destination: destinationCoords,
                  travelMode: window.google.maps.TravelMode.DRIVING,
                },
                (response, status) => {
                  if (status === "OK") {
                    directionsRenderer.setDirections(response);
                  } else {
                    console.error("Directions request failed due to " + status);
                  }
                }
              );
            } else {
              console.error(
                "Geocode was not successful for the following reason: " + status
              );
            }
          });
        } else {
          console.error(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    }
  }, [pickupLocation, destination]);

  return (
    <div className="h-screen w-screen flex flex-col relative">
      <div ref={mapRef} className="h-full w-full"></div>
      <button
        className="bg-black w-full text-lg font-medium mt-3 text-white rounded-lg p-2 absolute bottom-5"
        onClick={onChooseVehicle}
      >
        Choose Vehicle
      </button>
    </div>
  );
}

export default MapAndRoute;
