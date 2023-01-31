import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TestA from './component/tests/TestA';
import TestB from './component/tests/TestB';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <TestA />,
  },
  {
    path: "/TestB",
    element: <TestB />
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
