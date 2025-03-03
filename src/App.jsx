
import React, { Children } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Navbar/Home';
import Login from './Navbar/Login';
import Register from './Navbar/Register';
import RootLayout from './Navbar/RootLayout';
import ErrorPage from './SpecialSetups/ErrorPage';
import VideoUpload from './Components/VideoUpload';
import DataProtectionPolicy from './Footer/DataProtection';

import Products from './Navbar/Products'

import TermsOfService from './Footer/TermsOfServices';
import Privacy from './Footer/PrivacyPolicy';
import References from './Navbar/References';

import AgentsAndClinics from './Navbar/AgentsAndClinics';
import Videos from './Navbar/Videos';
import Dreams from './Navbar/Dreams';
import Contact from './Navbar/Contact';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'contact', element: <Contact /> },
      { path: 'video-upload', element: <VideoUpload /> },
      { path: 'data-protection', element: <DataProtectionPolicy /> },
      { path: 'videos', element: <Videos /> },
      { path: 'products', element: <Products /> },
      { path: 'dreams', element: <Dreams /> },
      { path: 'terms', element: <TermsOfService /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'portfolio', element: <References /> },
      { path: 'agents', element: <AgentsAndClinics /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
