import axios from "axios";
import Swal from "sweetalert2"

const DeleteButton = ({ id, name, category }) => {

    const handleDelete = async () => {
        try {

            Swal.fire({
                title: `Are you sure you want to delete "${name}"?`,
                icon: "warning",
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: "Delete",
                cancelButtonText: "Cancel",
                customClass: {
                    confirmButton: "custom-delete-button"
                }
            }).then(async(result) => {
                if (result.isConfirmed) {
                    Swal.fire("Deleted!", `The "${name}" has been deleted successfully.`);

                    switch (category) {
                        case "popular":

                            await axios.delete(`http://localhost:3000/api/deletepopular/${id}`);
                            break;


                        case "breakfast":

                            await axios.delete(`http://localhost:3000/api/deletebreakfast/${id}`);
                            break;

                        case "lunch":

                            await axios.delete(`http://localhost:3000/api/deletelunch/${id}`);
                            break;

                        case "dinner":

                            await axios.delete(`http://localhost:3000/api/deletedinner/${id}`);
                            break;

                        default:
                            return;
                    }
                }
            });

        } catch (err) {
            Swal.fire({
                title: `${name} Deleted fail!`,
                text: "Try again.",
                icon: "error",
                draggable: true
            });
            console.log("fail to delete the item", err)
        }

    }
    return (
        <button
            onClick={() => handleDelete(id)}
            title="Delete the item"
            class="sm:w-12 w-8 sm:h-12 h-8 rounded-full bg-red-500 flex items-center justify-center text-gray-100 hover:cursor-pointer sm:text-xl text-md hover:bg-red-700"
        >
            <i class="ri-delete-bin-line"></i>
        </button>
    )
}

export default DeleteButton