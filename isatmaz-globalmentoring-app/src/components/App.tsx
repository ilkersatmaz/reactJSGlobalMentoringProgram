import React, { useEffect } from "react";
import "@fontsource/montserrat"; 
import MainContent from "./MainContent";
import Footer from "./footerComponent/Footer";
import ErrorBoundary from "../ErrorBoundary";
import {BrowserRouter as Router,Navigate ,Route, Routes, useSearchParams } from "react-router-dom";
import './App.css';
import NotFoundPage from "./pages/NotFoundPage";
import { useDispatch } from "react-redux";

function App (){
    const dispatch = useDispatch();   
    return (
        <ErrorBoundary>
            <div>   
                <Router>
                    <Routes>
                        <Route path="*" element={<NotFoundPage />} />
                        <Route path="/" element={<Navigate to="/search" replace />} />
                        <Route path="/search" element={
                        <>
                            <MainContent />
                            <Footer/>
                        </>} />
                    </Routes>
                </Router>   
                     
            </div>           
        </ErrorBoundary>
    )  
}

export default App