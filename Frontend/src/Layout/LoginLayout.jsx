import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify';

const LoginLayout = () => {
  return (
    <div>
      <Outlet />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default LoginLayout