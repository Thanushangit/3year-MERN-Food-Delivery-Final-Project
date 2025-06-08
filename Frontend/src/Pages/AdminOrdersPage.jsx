import AdminOrderCard from "../Componets/AdminOrder/AdminOrderCard"

const AdminOrdersPage = () => {
    return (
        <section className="my-15 sm:my-20 relative">
    <div className="mycontainer text-left overflow-x-scroll overflow-y-auto scroll-smooth max-h-[500px]">
        <table className="w-full h-full relative">
            <thead className="sticky -top-5 z-10 bg-gray-50 w-full">
                <tr className="border-b border-b-gray-300 text-gray-600 shadow text-xl">
                    <th className="p-1 text-center w-[150px]">Customer <br /> Name</th>
                    <th className="p-1 text-center w-[250px]">Customer <br /> Address</th>
                    <th className="p-1 text-center w-[110px]">Customer <br /> Tel</th>
                    <th className="p-1 text-center">Food <br />Details</th>
                    <th className="p-1 text-center">Total <br />Amount</th>
                    <th className="p-1 text-center w-[180px]">Order <br />Status</th>
                    <th className="p-1 text-center w-[100px]">Action</th>
                </tr>
            </thead>
            <tbody>
                <AdminOrderCard />
                <AdminOrderCard />
                <AdminOrderCard />
                <AdminOrderCard />
                <AdminOrderCard />
                <AdminOrderCard />
                <AdminOrderCard />
                <AdminOrderCard />
                <AdminOrderCard />
                <AdminOrderCard />
                <AdminOrderCard />
                <AdminOrderCard />
                <AdminOrderCard />
                <AdminOrderCard />
                <AdminOrderCard />
                
            </tbody>
        </table>
    </div>
</section>

    )
}

export default AdminOrdersPage