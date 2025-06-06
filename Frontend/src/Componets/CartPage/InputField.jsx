import React from 'react'

const InputField = ({ id, name, label, placeholder, errors, type = "text", register }) => {
    return (
        <div className="mb-1">

            <label htmlFor={id}>
                <p className="text-gray-300 mb-1">{label}
                    <span className="text-orange-700 text-lg">*</span></p>
                <input
                    className={`outline-0 py-2 px-4 bg-gray-200 rounded w-full ${errors[name] ? 'border border-red-500' : 'border-0'}`}
                    type={type}
                    placeholder={placeholder}
                    id={id}
                    name={name}
                    {...register(name)}
                />
                {errors[name] && <span className='text-red-500 text-sm'> {errors[name].message}</span>}


            </label>
        </div>
    )
}

export default InputField