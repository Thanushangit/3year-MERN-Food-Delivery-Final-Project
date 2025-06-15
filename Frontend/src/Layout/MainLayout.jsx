import { Outlet } from 'react-router-dom'
import CustomerNavbar from '../Componets/Navbar/CustomerNavbar'

const MainLayout = () => {
  return (
    <div>
      <CustomerNavbar/>
      <Outlet/>
    </div>
  )
}

export default MainLayout