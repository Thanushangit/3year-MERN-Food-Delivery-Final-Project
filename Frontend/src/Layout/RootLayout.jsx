import { Outlet } from 'react-router-dom'
import ScrollMemory from '../Util/ScrollMemory'
import { useEffect } from 'react';
import { toast,ToastContainer } from 'react-toastify';

const RootLayout = () => {
  useEffect(() => {
    toast(' Welcome to Platezy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    });
  }, [])

  return (
    <div>
      <ScrollMemory />
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
    </div>
  )
}

export default RootLayout
