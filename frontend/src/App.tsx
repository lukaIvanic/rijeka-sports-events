import React from 'react';
import './App.css';

const App: React.FC = () => {
  const imeBoga: string = "Jakov Cvetko"
  return (
    <div className="App">
      <h1 className="text-3xl font-bold">
        {imeBoga}
      </h1>
    </div>
  );
}

export default App;
