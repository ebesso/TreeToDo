import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { ListViewPage, WSBViewPage } from 'pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import ViewContainer from 'components/ViewContainer/ViewContainer';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <ListViewPage />
  },
  {
    path: '/list',
    element: <ListViewPage />,
  },
  {
    path: '/wsb',
    element: <WSBViewPage />
  }
])

root.render(
  <React.StrictMode>
      <ViewContainer>
        <RouterProvider router={router} />
      </ViewContainer>
  </React.StrictMode>
);

reportWebVitals();
