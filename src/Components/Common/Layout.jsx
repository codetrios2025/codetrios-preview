import { Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const LayoutScreen = () =>{
    return(
        <>
            <Header />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <Footer /> 
        </>
    )
}

export default LayoutScreen;