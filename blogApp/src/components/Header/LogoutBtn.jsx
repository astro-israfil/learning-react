import { useDispatch } from "react-redux";
import { logout as logoutLocal } from "../../store/authSlice";
import authService from "../../appwrite/auth";

const LogoutBtn = () => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logoutLocal());
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <button onClick={logoutHandler} className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
            Logout
        </button>
    )
}

export default LogoutBtn;