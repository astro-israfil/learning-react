import { useContext } from "react"
import userContext from "../context/userContext"

function Dashboard() {
    const { user } = useContext(userContext)
    return (
        <div className="dashboard-container">
            {user ? <h1>This is {user?.username} Dashboard</h1> : <h1>Please log in</h1>}
        </div>
    )
}

export default Dashboard