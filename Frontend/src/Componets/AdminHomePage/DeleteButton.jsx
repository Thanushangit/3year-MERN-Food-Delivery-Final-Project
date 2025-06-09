import React from 'react'

const DeleteButton = () => {
    return (
        <button
            title="Delete the item"
            class="sm:w-12 w-8 sm:h-12 h-8 rounded-full bg-red-500 flex items-center justify-center text-gray-100 hover:cursor-pointer sm:text-xl text-md hover:bg-red-700"
        >
            <i class="ri-delete-bin-line"></i>
        </button>
    )
}

export default DeleteButton