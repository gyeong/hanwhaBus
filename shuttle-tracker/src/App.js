import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import MapView from './components/MapView';

function App() {
  const [selectedRoute, setSelectedRoute] = useState('yeouinaru');
  const [shuttlePos, setShuttlePos] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/latest')
        .then(res => res.json())
        .then(data => {
          setShuttlePos([parseFloat(data.lat), parseFloat(data.lon)]);
        })
        .catch(err => console.error('위치 데이터 가져오기 실패:', err));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <TopBar onSelectRoute={setSelectedRoute} />
      <MapView selectedRoute={selectedRoute} shuttlePos={shuttlePos} />
    </div>
  );
}

export default App;
