import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const destination = [37.5194, 126.9402];

const routes = {
  yeouinaru: [
    [37.519510, 126.940371], // 63빌딩
    [37.520480, 126.940929], // 교차로
    [37.524949, 126.935282],
    [37.522880, 126.931951],
    [37.525094, 126.929787],
    [37.525714, 126.930799], // 여의나루 정류장
    [37.526806, 126.932583],
    [37.524949, 126.935282],
    [37.520480, 126.940929],
    [37.519510, 126.940371]
  ],
  saetgang: [
    [37.519510, 126.940371],
    [37.520480, 126.940929],
    [37.522880, 126.931951],
    [37.525094, 126.929787]
  ]
};

const shuttleIcon = new L.Icon({
  iconUrl: '/icons/icon_busStop.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const destinationIcon = new L.Icon({
  iconUrl: '/icons/icon_63.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function MapView({ selectedRoute, shuttlePos }) {
  return (
    <MapContainer
        style={{ height: 'calc(100vh - 64px)' }}
        bounds={[
            [37.519510, 126.940371],  // 63빌딩
            [37.514919, 126.927126],  // 샛강 쪽
            [37.525714, 126.930799],  // 여의나루 쪽
        ]}
        scrollWheelZoom={false}
        dragging={false}
        zoomControl={false}
        doubleClickZoom={false}
        touchZoom={false}
        keyboard={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution="&copy; CartoDB"
      />

      {selectedRoute && (
        <Polyline
          positions={routes[selectedRoute]}
          color="white"
          weight={3}
          opacity={0.3}
        />
      )}

      <Marker position={destination} icon={destinationIcon} />

      {shuttlePos && <Marker position={shuttlePos} icon={shuttleIcon} />}
    </MapContainer>
  );
}

export default MapView;
