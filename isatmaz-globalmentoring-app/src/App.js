import React from "react";
import "@fontsource/montserrat"; 
import MainContent from "./components/MainContent";
import Footer from "./components/footerComponent/Footer";
import ErrorBoundary from "./ErrorBoundary";

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

export default App;