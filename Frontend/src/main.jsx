import './main.css';
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
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
import { store } from './Store/store.js';
import Confirmation from './Componets/CartPage/Confirmation.jsx';
import CartLayout from './Layout/CartLayout.jsx';
import OrderSuccess from './Componets/CartPage/OrderSuccess.jsx';


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
          { path: 'cart', element: <CartLayout/> , 
            children:[
              {index:true, element:<Cart/>},
              {path:'confirmation', element:<Confirmation/>},
              {path:"orderSuccess" , element:<OrderSuccess/>}
            ]
           },
          
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
  // <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  // </StrictMode>
)


