import { useId, forwardRef } from "react"

const Select = ({
    label,
    options = [],
    className = "",
    ...props
}, ref) => {
    const id = useId();

    return (
        <div className="w-full">
            {label && <label htmlFor={id}></label>}
            <select 
                ref={ref} 
                className={`px-3 py-2 bg-white text-black rounded-lg focus:bg-gray-50 outline-none border border-gray-200 duration-200 w-full ${className}`} 
                id={id}
                {...props}
                >
                    {
                        options?.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))
                    }
                </select>
        </div>
    )
}

export default forwardRef(Select);