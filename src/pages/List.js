import React from "react";
import YourList from "../components/YourList"

const List = () => {
    return (
        <React.Fragment>
            
            <section>
            {/* <div className="centered text-4xl h-screen">This is List Page</div> */}
            <div><YourList/></div>
            </section>
        </React.Fragment>
        
    );
}

export default List