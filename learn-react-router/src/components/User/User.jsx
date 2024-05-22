import { useParams } from "react-router-dom"

function User() {
    const { userId } = useParams();

    return (
        <>
            <h1 className="text-center text-4xl text-green-800">Hello There, I am {userId || "Anonymous"}</h1>
        </>
    )
}

export default User