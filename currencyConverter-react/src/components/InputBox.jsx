import { useId } from "react"

function InputBox({
    label,
    amount,
    onAmountChange,
    currency,
    onCurrencyChange,
    currencyRate,
    isDisabledField
}) {
    const inputId = useId();
    const selectId = useId();
    return (
        <>
            <div className='flex flex-wrap justify-between gap-4'>
                <div className="flex flex-col items-start flex-1">
                    <label htmlFor={`${inputId}`}>{label}</label>
                    <input className="w-full text-slate-900 p-2 border-0 outline-none disabled:bg-white" id={`${inputId}`} type="number" value={amount} onChange={onAmountChange} disabled={isDisabledField}  />
                </div>
                <div className="flex flex-col items-end">
                    <label className='text-white' htmlFor={`${selectId}`}>Select Currency</label>
                    <select className="text-slate-500 p-2" name="currency" id={`${selectId}`} value={currency} onChange={onCurrencyChange}>
                        {Object.entries(currencyRate).map(([key, value]) => {
                            return <option value={key} key={key}>{key}</option>
                        })}
                    </select>
                </div>
            </div>
        </>
    )
}

export default InputBox