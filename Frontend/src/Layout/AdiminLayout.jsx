import { Navigate, Outlet } from "react-router-dom";


const AdiminLayout = () => {


  const isAdminAuth = localStorage.getItem("admin-auth");
  console.log("Admin Auth Status:", isAdminAuth);


  return isAdminAuth === "true" ? <Outlet /> : <Navigate to="/admin" replace />;
}

export default AdiminLayout








// you should fixed the logout after never go to the dashboard page