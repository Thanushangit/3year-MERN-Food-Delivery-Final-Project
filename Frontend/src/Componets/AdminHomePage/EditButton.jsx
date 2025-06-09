import React from 'react'

const EditButton = () => {
    return (
        <button
            title="Edit the item"
            class="sm:w-12 w-8 sm:h-12 h-8 rounded-full bg-green-500 flex items-center justify-center text-gray-100 hover:cursor-pointer sm:text-xl text-md hover:bg-green-700"
        >
            <i class="ri-edit-2-line"></i>
        </button>
    )
}

export default EditButton