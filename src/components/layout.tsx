import React from "react";
import Header from "../parts/header";

function Layout(props: any) {
    return (
        <div className="h-screen ">
            <Header />
            {props.children}
        </div>
    );
}

export default Layout;
