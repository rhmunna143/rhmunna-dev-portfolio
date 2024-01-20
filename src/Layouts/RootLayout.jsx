import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar";
import Footer from "../Components/Footer";


const RootLayout = () => {
    return (
        <div style={{ overflowX: "hidden" }}>
            <NavBar />

            <Outlet />

            <Footer />
        </div>
    );
};

export default RootLayout;