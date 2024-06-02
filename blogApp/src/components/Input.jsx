import { forwardRef, useId } from "react";

const Input = forwardRef(({
    label,
    type = "text",
    className = "",
    ...props
}, ref) => {
    const id = useId();

    return (
        <div className="w-full">
            {label && <label 
                className="mb-1 pl-1 inline-block"
                htmlFor={id}
                >
                {label}
            </label>}
            <input 
                type={type} 
                id={id} 
                className={`px-3 py-2 bg-white text-black rounded-lg outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
                {...props}
            />
        </div>
    )
});


export default Input;