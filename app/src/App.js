import React, {Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

const RiskSummary = React.lazy(() => import('./components/risksummary/RiskSummary'))
const EditRisk    = React.lazy(() => import('./components/editrisk/EditRisk'))

function App() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/risksummary" element={<RiskSummary/>} />
            <Route path="/editrisk" element={<EditRisk/>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
  );
}

export default App;