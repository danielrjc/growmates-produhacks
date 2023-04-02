// pages/dashboard.js
import React, { useState, useEffect } from 'react';
import withAuth from '../components/withAuth'; // Adjust the import path as needed
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import '../src/styles.css'
import Overlay from '../components/overlay';
import Header from '../components/header';
import Footer from '../components/footer';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 49.2827,
  lng: -123.1207,
};

let locations = [
  { "name": "Barclay Heritage Square", "coordinates": [49.28738755, -123.13284501] },
  { "name": "Cartier Park", "coordinates": [49.2376052, -123.0975115] },
  { "name": "Cedar Cottage Neighourhood House Edible Garden", "coordinates": [49.2376052, -123.0975115] },
  { "name": "Champlain Heights Park", "coordinates": [49.2164913, -123.0326603] },
  { "name": "Champlain Place Community Garden", "coordinates": [49.2167296, -123.0352463] },
  { "name": "China Creek Housing Co-op", "coordinates": [49.2643106, -123.0832689] },
  { "name": "China Creek North Park", "coordinates": [49.2611153, -123.07798] },
  { "name": "Church of the Good Sheppard", "coordinates": [49.2614867, -123.1089655] },
  { "name": "Clark Park Orchard", "coordinates": [49.257484, -123.073727] },
  { "name": "Cypress Community Garden", "coordinates": [49.2662772, -123.1456636] },
  { "name": "Fraserlands Community Garden [Riverfront Park]", "coordinates": [49.20587682, -123.05065448] },
  { "name": "Frog Hollow Neighbourhood House Garden 2", "coordinates": [49.2654085, -123.044393] },
  { "name": "Grace Memorial Church", "coordinates": [49.2564075, -123.0874186] },
  { "name": "Kerrisdale Community Garden", "coordinates": [49.2177463, -123.1482727] },
  { "name": "Langara College Community Garden", "coordinates": [49.2245248, -123.105789] },
  { "name": "Maclean Housing", "coordinates": [49.2784286, -123.0935914] },
  { "name": "Marpole Place expansion", "coordinates": [49.2087963, -123.1347288] },
  { "name": "McCleery Golf Course", "coordinates": [49.221493, -123.1683146] },
  { "name": "Means of Production Garden", "coordinates": [49.2655009, -123.08501953] },
  { "name": "MOBY Community Garden", "coordinates": [49.2604731, -123.0688879] },
  { "name": "New Brighton Park", "coordinates": [49.288757, -123.0361825] },
  { "name": "Pine  St. Community Orchard", "coordinates": [49.2662399, -123.1435022] },
  { "name": "Briarpatch Garden", "coordinates": [49.282147, -123.091439] },
  { "name": "Robson Park Community Garden", "coordinates": [49.25867473, -123.09231872] },
  { "name": "Sahalli  Community Garden", "coordinates": [49.2636848, -123.0885931] },
  { "name": "SPEC Cambie Communal Garden", "coordinates": [49.2615932, -123.1155183] },
  { "name": "SPEC Rooftop Garden", "coordinates": [49.2857348, -123.1178337] },
  { "name": "Stanley Park Community Garden", "coordinates": [49.29367168, -123.13855459] },
  { "name": "Strathcona Community Garden", "coordinates": [49.27600308, -123.08797176] },
  { "name": "The James Garden & Social Community", "coordinates": [49.269003, -123.111763] },
  { "name": "Village on False Creek", "coordinates": [49.2708223341636, -123.110591204405] },
  { "name": "Wall Street Community Garden", "coordinates": [49.28656975, -123.06186949] },
  { "name": "Westmount Park", "coordinates": [49.2718445, -123.2144218] },
  { "name": "Deeper Roots Seniors Community Garden", "coordinates": [49.2369358, -123.1218448] },
  { "name": "Aberthau Garden Project", "coordinates": [49.27214278, -123.20477766] },
  { "name": "Community Alternatives Coop Community Garden", "coordinates": [49.270065, -123.149194] },
  { "name": "Vera Community Garden", "coordinates": [49.209683, -123.119179] },
  { "name": "HFBC Housing Foundation", "coordinates": [49.267434, -123.152475] },
  { "name": "Brightside Home Foundation - King's Daughters", "coordinates": [49.260319, -123.075082] },
  { "name": "HFBC Housing Foundation", "coordinates": [49.276211, -123.043281] },
  { "name": "John Hendry [Trout Lake] Park", "coordinates": [49.255098, -123.06367871] },
  { "name": "Riley Park", "coordinates": [49.24298494, -123.10448685] },
  { "name": "Still Creek Community Garden", "coordinates": [49.243584, -123.045562] },
  { "name": "Macleod Manor Community Garden", "coordinates": [49.2069012, -123.1396302] },
  { "name": "Astoria Community Garden", "coordinates": [49.28134, -123.087377] },
  { "name": "Centrepoint Gardens", "coordinates": [49.258797, -123.102952] },
  { "name": "City Farmer Compost Demonstration Centre", "coordinates": [49.2666997, -123.1497228] },
  { "name": "Adanac Park Community Garden", "coordinates": [49.27558227, -123.02439453] },
  { "name": "Arbutus Village Park", "coordinates": [49.2507172, -123.1549951] },
  { "name": "Brewery Creek Community Garden", "coordinates": [49.26416489, -123.09573323] },
  { "name": "Burrard View Park", "coordinates": [49.2912065, -123.0519175] },
  { "name": "Callister Park", "coordinates": [49.28618, -123.0453833] },
  { "name": "Cambie Park Community Garden", "coordinates": [49.22130853, -123.1186284] },
  { "name": "Charleson Park Community Garden", "coordinates": [49.267042, -123.123837] },
  { "name": "City Hall Community Garden", "coordinates": [49.260668, -123.112537] },
  { "name": "Cottonwood Community Garden", "coordinates": [49.279729, -123.077662] },
  { "name": "David Lam Park", "coordinates": [49.273215, -123.121347] },
  { "name": "Dunbar Community Centre", "coordinates": [49.234924, -123.184823] },
  { "name": "False Creek Elementary School", "coordinates": [49.267419, -123.116473] },
  { "name": "Fraser River Park", "coordinates": [49.207103, -123.147382] },
  { "name": "Garden Park", "coordinates": [49.283719, -123.058947] },
  { "name": "Grandview Park", "coordinates": [49.276849, -123.068791] },
  { "name": "Grays Park", "coordinates": [49.236882, -123.090105] },
  { "name": "Hastings Park", "coordinates": [49.281729, -123.041663] },
  { "name": "Jericho Beach", "coordinates": [49.270827, -123.203154] },
  { "name": "Killarney Park", "coordinates": [49.224553, -123.041499] },
  { "name": "Kitsilano Beach Park", "coordinates": [49.271849, -123.155349] },
  { "name": "Lord Roberts Annex", "coordinates": [49.281142, -123.130922] },
  { "name": "McBride Park", "coordinates": [49.264553, -123.181873] },
  { "name": "Memorial South Park", "coordinates": [49.234553, -123.076663] },
  { "name": "Moberly Park", "coordinates": [49.214234, -123.100272] },
  { "name": "Mount Pleasant Park", "coordinates": [49.256953, -123.107926] },
  { "name": "Nanaimo Park", "coordinates": [49.236286, -123.056603] },
  { "name": "New Brighton Park", "coordinates": [49.291109, -123.036179] },
  { "name": "Norquay Park", "coordinates": [49.239153, -123.048826] },
  { "name": "Oak Park", "coordinates": [49.212892, -123.128615] },
  { "name": "Oak Meadows Park", "coordinates": [49.233835, -123.128847] },
  { "name": "Pandora Park", "coordinates": [49.281402, -123.058162] },
  { "name": "Queen Elizabeth Park", "coordinates": [49.239653, -123.111359] },
  { "name": "Quilchena Park", "coordinates": [49.245759, -123.146015] },
  { "name": "Ravine Park", "coordinates": [49.245245, -123.163927] },
  { "name": "Renfrew Park", "coordinates": [49.254347, -123.038049] },
  { "name": "Slocan Park", "coordinates": [49.242837, -123.046479] }
]


const Maps = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  const handleCloseInfoWindow = () => {
    setSelectedLocation(null);
  };


  return (
    <div className="dashboard-container">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          options={{
            mapTypeControl: false, // Hide map type controls
            streetViewControl: false,
            fullscreenControl: false,
            zoomControl: false,
          }}
        >
          {locations.map((location) => (
            <Marker
              key={location.name}
              position={{
                lat: location.coordinates[0],
                lng: location.coordinates[1],
              }}
              onClick={() => handleMarkerClick(location)}
            />
          ))}

          {selectedLocation && (
            <InfoWindow
              position={{
                lat: selectedLocation.coordinates[0],
                lng: selectedLocation.coordinates[1],
              }}
              onCloseClick={handleCloseInfoWindow}
            >
              <div>
                <h4>{selectedLocation.name}</h4>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
        <Overlay />
        <Header source="maps" />
      </LoadScript>
      <Footer />
    </div>
  );
};

export default withAuth(Maps);
