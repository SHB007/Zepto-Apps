import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";


import TopNavBar from "./TopNavBar";
import UploadFont from "./UploadFont/UploadFont";
import FontList from './FontList/FontList';
import FontGroup from './FontGroup/FontGroup';


const RootComponent = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/uploadFont')
    }, []);

    return (
        <div>
            <TopNavBar />
            <Routes>
                <Route exact={true} path="/uploadFont" element={<UploadFont />} />
                <Route exact={true} path="/fontList" element={<FontList />} />
                <Route exact path="/fontGroup" element={<FontGroup />} />
            </Routes>
        </div>

    )
}

export default RootComponent;