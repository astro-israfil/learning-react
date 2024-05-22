import { Outlet } from "react-router-dom"
import { Navbar, Footer } from "./components"

function Layout() {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default Layout