import React, { Fragment, useState } from 'react'
import { GoogleMap, InfoWindowF, MarkerF, useLoadScript } from '@react-google-maps/api'
import './rent.css'

const marker = [
  {
    id: 1,
    name: 'Tokyo, Japan',
    position: { lat: 35.6762, lng: 139.6503 },
  }
]

function Rent() {
  const [mapMarker, setMapMarker] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  const handleMapMarker = (marker) => {
    if (marker === mapMarker) {
      return;
    }
    setMapMarker(marker);
  };

  const submitForm = (e) => {
    e.preventDefault();
  }

  return (
    <div className='rent'>
      <div className='rent-heading'>
        <h2 className='gradient-color'>Rental Form</h2>
      </div>

      <Fragment>
        <div className='rent-map'>
          <form onsubmit={submitForm} action='' method='POST' className='rent-form'>
            <div className='rent-info'>
              <label for='name'>Name:</label>
              <input type='text' name='name' />
            </div>
            <div className='rent-info'>
              <label for='email'>Email:</label>
              <input type='email' name='email' />
            </div>
            <div className='rent-info'>
              <label for='tname'>Talent Name:</label>
              <input type='text' name='tname' />
            </div>
            <label className='rent-info'>
              Rental Time:
              <select name='trtime'>
                <option value='1'>1 hourr</option>
                <option value='2'>2 hours</option>
                <option value='3' selected>3 hours</option>
              </select>
            </label>
            <div className='rent-info'>
              <label for='dlocation'>Date Location:</label>
              <input type='text' name='dlocation' />
            </div>
            <div className='rent-info'>
              <label for='comment'>Comment:</label>
              <input type='text' name='comment' />
            </div>
            <button type='submit'>Submit Form</button>
          </form>

          <div style={{ height: '80vh', width: '100%' }}>
            {isLoaded ? (
              <GoogleMap
                center={{ lat: 35.6762, lng: 139.6503 }}
                zoom={15}
                onClick={() => setMapMarker(null)}
                mapContainerStyle={{ width: '100%', height: '80%' }}
              >
                {marker.map(({ id, name, position }) => (
                  <MarkerF
                    key={id}
                    position={position}
                    onClick={() => handleMapMarker(id)}
                  >
                    {mapMarker === id ? (
                      <InfoWindowF onCloseClick={() => setMapMarker(null)}>
                        <div>
                          <p>{name}</p>
                        </div>
                      </InfoWindowF>
                    ) : null}
                  </MarkerF>
                ))}
              </GoogleMap>
            ) : null}
          </div>
        </div>
      </Fragment>
    </div>
  );
}

export default Rent
