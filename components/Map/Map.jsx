import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  let coords = searchResults.map(result => ({
    latitude: result.lat,
    longitude: result.long
  }))

  const center = getCenter(coords);

  const [viewport, setViewport] = useState({
    height: "100%",
    width: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 12
  });

  return (
    <ReactMapGL
      mapStyle={"mapbox://styles/vlad8702/cktascvy82tkj17plwe7hn8s9"}
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}>
      {searchResults.map(result => (
        <div key={result.long}>
          <Marker 
            latitude={result.lat}
            longitude={result.long}
            offsetTop={-20}>
              <p 
                className="cursor-pointer text-4xl"
                onClick={() => setSelectedLocation(result)}
                aria-label="push-pin"
                role="img">
                📍
              </p>
          </Marker>

          {/* This is the popup */}
          {selectedLocation.long === result.long && (
            <Popup 
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}>
              {result.title}
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;