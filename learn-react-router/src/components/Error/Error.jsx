import { useRouteError } from "react-router-dom"

function Error() {
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <div className="flex flex-col justify-center items-center w-full h-screen">
                <h1 className='text-4xl text-slate-700 text-center font-bold mb-4'>Oops!</h1>
                <p className='text-3xl text-gray-600 text-center font-bold mb-8'>Sorry, an unexpected error has occurred.</p>
                <p className="text-base text-red-600 text-center">
                    <i>{error.status} {error.statusText || error.message}</i>
                </p>
            </div>
        </>
    )
}

export default Error