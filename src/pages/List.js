import React from "react";
import YourList from "../components/YourList"

const List = (props) => {
    return (
        <React.Fragment>
            
            <section>
            {/* <div className="centered text-4xl h-screen">This is List Page</div> */}
            <div><YourList userid={props.Userid}/></div>
            </section>
        </React.Fragment>
        
    );
}

export default List