import Swal from "sweetalert2"

const DeleteButton = ({ id, title }) => {

    const handleDelete = () => {
        try {
            Swal.fire({
                title: `Are you sure you want to delete "${title}"?`,
                icon: "warning",
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: "Delete",
                cancelButtonText: "Cancel",
                customClass: {
                    confirmButton: "custom-delete-button"
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire("Deleted!", `The "${title}" has been deleted successfully.`);
                    // in here you can add delete api for the db 
                }
            });

        } catch (err) {
            Swal.fire({
                title: `${title} Deleted fail!`,
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