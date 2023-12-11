import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar";
import Footer from "../Components/Footer";


const RootLayout = () => {
    return (
        <>
            <NavBar />

            <Outlet />

            <Footer />
        </>
    );
};

export default RootLayout;