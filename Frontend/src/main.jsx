import './assets/css/main.css'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AnimatePresence } from "framer-motion";
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
import UserLayout from './Layout/UserLayout.jsx';
import AdiminLayout from './Layout/AdiminLayout.jsx';
import MainPage from './Pages/MainPage.jsx'
import CustomerErrorPage from './Pages/CustomerErrorPage.jsx'
import AdminErrorPage from './Pages/AdminErrorPage.jsx'
import AdminLoginPage from './Pages/AdminLoginPage.jsx';
import AdminDashboard from './Layout/AdminDashboard.jsx';
import AdminHomePage from './Pages/AdminHomePage.jsx';
import AdminOrdersPage from './Pages/AdminOrdersPage.jsx';
import CurrentOrder from './Pages/CurrentOrder.jsx';
import OrderHistory from './Pages/OrderHistory.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <MainErrorPage />,
    children: [
      { index: true, element: <MainPage /> },

      {
        path: 'user',
        element: <UserLayout />,
        errorElement: <CustomerErrorPage />, // added
        children: [
          {
            element: <MainLayout />,
            children: [
              { index: true, element: <Home /> },
              {
                path: 'myorder', element: <MyOrder />,
                children: [
                  { index: true, element: <CurrentOrder /> },
                  { path: "History", element: <OrderHistory /> }
                ]
              },
              { path: 'about', element: <About /> },
              {
                path: 'cart',
                element: <CartLayout />,
                children: [
                  { index: true, element: <Cart /> },
                  { path: 'confirmation', element: <Confirmation /> },
                  { path: 'orderSuccess', element: <OrderSuccess /> }
                ]
              },
            ]
          },
          {
            path: 'authentication',
            element: <LoginLayout />,
            children: [
              { path: 'login', element: <Login /> },
              { path: 'register', element: <Register /> }
            ]
          },
          // Catch-all inside user
          { path: '*', element: <CustomerErrorPage /> }
        ]
      },

      {
        path: 'admin',
        element: <AdiminLayout />,
        errorElement: <AdminErrorPage />,
        children: [
          { index: true, element: <AdminLoginPage /> },
          {
            path: "dashboard", element: <AdminDashboard />,
            children: [
              { index: true, element: <AdminHomePage /> },
              { path: 'orders', element: <AdminOrdersPage /> }
            ]
          },
          { path: '*', element: <AdminErrorPage /> }
        ]
      },

      //  Catch-all for unmatched root-level routes
      { path: '*', element: <MainErrorPage /> }
    ]
  }
],
  {
    basename: "/3year-MERN-Food-Delivery-Final-Project"
  });




createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>

  </Provider>
)

