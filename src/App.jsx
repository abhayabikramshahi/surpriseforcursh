import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function ComingSoon() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-green-500 font-mono p-4">
      <div className="w-full max-w-lg text-left">
        <p className="text-lg">$ echo "Coming Soon..."</p>
        <p className="mt-2">Something amazing is on the way. Stay tuned! 😊</p>
        <p className="mt-4">$ █</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
