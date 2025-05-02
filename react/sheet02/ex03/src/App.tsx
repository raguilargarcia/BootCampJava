import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Hora Actual</h1>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default App;