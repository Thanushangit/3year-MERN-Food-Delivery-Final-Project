import { Outlet } from "react-router-dom";
import AdminNavbar from "../Componets/Navbar/AdminNavbar";
import { toast, Bounce } from "react-toastify";
import { useEffect } from "react";

const AdminDashboard = () => {
    useEffect(() => {
        toast.success('👋 Welcome, Thanushan!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }, []);

    return (
        <div>
            <AdminNavbar />
            <Outlet />
        </div>
    );
};

export default AdminDashboard;
