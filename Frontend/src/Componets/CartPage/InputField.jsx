const InputField = ({ id, name, label, placeholder, errors, type = "text",star=true, register ,loading,autoComplete="off"}) => {
    return (
        <div className="mb-1">

            <label htmlFor={id}>
                <p className="text-gray-300 mb-1">{label}
                    {star && <span className="text-orange-700 text-lg">*</span>}</p>
                <input
                    className={`outline-0 py-2 px-4 bg-gray-200 rounded w-full ${errors[name] ? 'shadow-sm shadow-red-500' : ''}`}
                    type={type}
                    placeholder={placeholder}
                    id={id}
                    autoComplete={autoComplete}
                    name={name}
                    {...register(name)}
                    disabled={loading}
                />
                {errors[name] && <span className='text-red-500 text-sm'> {errors[name].message}</span>}


            </label>
        </div>
    )
}

export default InputField