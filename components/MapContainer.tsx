import React, { useEffect, useRef, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function MapContainer() {
  //   const [selectedLocation, setSelectedLocation] = useState({});

  return (
    <Map
      initialViewState={{
        longitude: 28.97953,
        latitude: 41.015137,
        zoom: 12,
      }}
      mapboxAccessToken={process.env.MAPBOX_TOKEN}
      style={{ width: '100%', height: '100%' }}
      mapStyle='mapbox://styles/yvzfth/ckzshkwjv000k14ngydzgk1ck'
      //   onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <div>
        <Marker longitude={28.97953} latitude={41.015137} offset={[-20, -10]}>
          <p
            role='img'
            aria-label='push-pin'
            //   onClick={() => setSelectedLocation(result)}
            className='animate-bounce cursor-pointer text-2xl'
          >
            📌
          </p>
        </Marker>
      </div>
    </Map>
  );
}

export default MapContainer;
