import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import AdminPanel from './AdminPanel/SuperAdminDashboard';
import NoPage from './NoPage';


const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="*" element={<NoPage />} />
          <Route path="/AdminPanel" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App