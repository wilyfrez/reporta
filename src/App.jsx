import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Account, AuthRoutes } from './components';
import { ContextProvider } from './contexts/ContextProvider';
import {
  Home,
  Login,
  Register,
  ActivateAccount,
  ActivationInstruction,
} from './pages';

import './App.css';

const App = () => (
  <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/activation-instruction"
          element={<ActivationInstruction />}
        />
        <Route path="/activate/:token" element={<ActivateAccount />} />
        <Route
          path="/account/*"
          element={
            <AuthRoutes>
              <Account />
            </AuthRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  </ContextProvider>
);

export default App;
