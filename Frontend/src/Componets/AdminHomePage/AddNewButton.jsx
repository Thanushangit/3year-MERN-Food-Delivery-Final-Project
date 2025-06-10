import React from 'react'

const AddNewButton = () => {
    return (
        <div class="h-full w-full mt-10 mb-1">
            <button
                title="add a item"
                class="w-14 h-14 md:w-20 md:h-20 rounded-full bg-primary hover:bg-yellow-600 flex items-center justify-center text-white text-3xl font-bold shadow-2xl mx-auto cursor-pointer transition duration-300"
            >
                <i class="ri-add-line"></i>
            </button>
        </div>
    )
}

export default AddNewButton