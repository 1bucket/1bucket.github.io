import { BrowserRouter, Routes, Route } from 'react-router';

import LandingPage from './components/landing-page/LandingPage';

import './App.css'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>
}

export default App
