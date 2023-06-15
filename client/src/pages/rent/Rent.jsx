import React, { useState } from 'react'
import { GoogleMap, InfoWindowF, MarkerF, useLoadScript } from '@react-google-maps/api'
import './rent.css'

function Rent() {
  const [mapMarker, setMapMarker] = useState(null);
  const [rentFormMsg, setRentFormMsg] = useState('');
  const [rentFormData, setRentFormData] = useState({
    fname: '',
    email: '',
    tname: '',
    trtime: '',
    dlocation: '',
    comment: '',
  });

  const marker = [
    {
      id: 1,
      name: 'Tokyo, Japan',
      position: { lat: 35.6762, lng: 139.6503 },
    }
  ]

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  const handleMapMarker = (marker) => {
    if (marker === mapMarker) {
      return;
    }
    setMapMarker(marker);
  };

  const updateRentForm = (e) => {
    const { name, value } = e.target;

    setRentFormData({
      ...rentFormData, [name]: value
    });
  };

  const submitRentForm = (e) => {
    e.preventDefault();

    setRentFormData({ fname: '', email: '', tname: '', 
    trtime: '', dlocation: '', comment: '',});

    setRentFormMsg(`Thank you! We will be in contact with you soon...`);
  };

  return (
    <div className='rent'>
      <div className='rent-heading'>
        <h2 className='gradient-color'>Rental Form</h2>
      </div>

      <div className='rent-map-container'>
        <div className='rent-map'>
          <form onSubmit={submitRentForm} method='post' className='rent-form'>
            <div className='rent-info'>
              <label for='fname'>Full Name:</label>
              <input onChange={updateRentForm} name='fname' value={rentFormData.fname} type='text' />
            </div>
            <div className='rent-info'>
              <label for='email'>Email:</label>
              <input onChange={updateRentForm} name='email' value={rentFormData.email} type='email' />
            </div>
            <div className='rent-info'>
              <label for='tname'>Talent Name:</label>
              <input onChange={updateRentForm} name='tname' value={rentFormData.tname} type='text' />
            </div>
            <label className='rent-info'>
              Rental Time:
              <select onChange={updateRentForm} name='trtime' value={rentFormData.trtime}>
                <option value='3'>3 hours</option>
                <option value='2'>2 hours</option>
                <option value='1'>1 hour</option>
              </select>
            </label>
            <div className='rent-info'>
              <label for='dlocation'>Date Location:</label>
              <input onChange={updateRentForm} name='dlocation' value={rentFormData.dlocation} type='text' />
            </div>
            <div className='rent-info'>
              <label for='comment'>Comment:</label>
              <input onChange={updateRentForm} name='comment' value={rentFormData.comment} type='text' />
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
      </div>

      <div className='rent-message'>
          <p>{rentFormMsg}</p>
      </div>
    </div>
  );
}

export default Rent
