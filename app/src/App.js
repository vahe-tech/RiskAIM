import React, {Suspense} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

const RiskSummary = React.lazy(() => import('./components/risksummary/RiskSummary'))
const EditRisk    = React.lazy(() => import('./components/editrisk/EditRisk'))

function App() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Route path="/risksummary">
            <RiskSummary/>
          </Route>
          <Route path="/editrisk">
            <EditRisk/>
          </Route>
        </BrowserRouter>
      </Suspense>
  );
}

export default App;
