import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar";


const RootLayout = () => {
    return (
        <>
            <NavBar />

            <Outlet />


        </>
    );
};

export default RootLayout;