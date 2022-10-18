import React from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Tabs from "./components/Tabs";

function App(){
    return (
        <>
            <Header/>
            <Tabs>
                <div label="Counter">
                    <Counter startBy={5} countBy={2}/>
                </div>
                <div label="Search">
                    <Search/>
                </div>               
            </Tabs>
            
           
            <Footer/>
        </>
        
    )
}

export default App