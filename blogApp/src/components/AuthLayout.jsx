import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Protected({children, authentication = true}) {
    const [loading, setLoading] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login");
        } else if (!authentication && authStatus !== authentication) {
            navigate("/");
        }

        setLoading(false);
    }, [authentication, authStatus, navigate]);

    return (
        <>
            {loading ? (<h1 className="text-center">Loading...</h1>) : children}
        </>
    )
}

export default Protected;