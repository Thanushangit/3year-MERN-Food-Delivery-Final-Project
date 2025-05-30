import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './Layout/RootLayout.jsx';
import Home from './Pages/Home.jsx';
import MyOrder from './Pages/MyOrder.jsx';
import About from './Pages/About.jsx';
import Cart from './Pages/Cart.jsx';
import MainLayout from './Layout/MainLayout.jsx';
import LoginLayout from './Layout/LoginLayout.jsx';
import MainErrorPage from './Pages/MainErrorPage.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import './main.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <MainErrorPage />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'myorder', element: <MyOrder /> },
          { path: 'about', element: <About /> },
          { path: 'cart', element: <Cart /> },
        ],
      },
      {
        path: 'authentication',
        element: <LoginLayout />,
        children: [
          { index: true, element: <Login /> },
          { path: 'register', element: <Register /> },
        ],
      },
    ],
  },
],
  {
    basename: "/3year-MERN-Food-Delivery-Final-Project"
  });


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


