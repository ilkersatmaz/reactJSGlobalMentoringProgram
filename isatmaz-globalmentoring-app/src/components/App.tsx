import React from "react";
import "@fontsource/montserrat"; 
import MainContent from "./MainContent";
import Footer from "./footerComponent/Footer";
import ErrorBoundary from "../ErrorBoundary";

import './App.css';

function App (){
    return (
        <ErrorBoundary>
            <div>                
                <MainContent />
                <Footer />
            </div>           
        </ErrorBoundary>
    )  
}

export default App