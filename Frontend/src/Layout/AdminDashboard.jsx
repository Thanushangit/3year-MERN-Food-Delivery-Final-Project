import { Outlet, Navigate } from "react-router-dom";
import AdminNavbar from "../Componets/Navbar/AdminNavbar";
import { toast, Bounce, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import AdminFooter from "../Componets/Footer/AdminFooter";
import { useEffect } from "react";

const AdminDashboard = () => {
    const adminStatus = useSelector(sta => sta.adminStatus.status)


    useEffect(() => {
        if (adminStatus) {
            toast.success(`👋 Welcome, J'boys!`, {
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
        }
    }, [adminStatus]);


    if (!adminStatus) {
        return <Navigate to="/admin" replace />;
    }



    return (
        <div>
            <AdminNavbar />
            <Outlet />
            <AdminFooter />
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
    );
};

export default AdminDashboard;
