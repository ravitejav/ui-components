/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { useLocation } from "react-router-dom";
import { getTitle } from "../helpers/Constants/constants";

export const Title = () => {

    const [title, setTitle] = React.useState("");
    const [showNavbar, setShowNabar] = React.useState(false);
    const path = useLocation();

    useEffect(() => {
        console.log(path.pathname, path.pathname === "/")
        if(path.pathname === "/ui-components") setShowNabar(false);
        else if(!showNavbar)setShowNabar(true);
        setTitle(getTitle(path.pathname));
    }, [path]);

    return (
        <div className={`text-4xl pb-0 ${showNavbar ? '' : 'hidden'}`}>
            <h1 className="">{title}</h1>
        </div>
    )
}