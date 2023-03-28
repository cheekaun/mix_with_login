import React from "react";
import StationInfomation from "../components/StationInfomation";

const StationInfo = (props) => {
    return (
        <React.Fragment>
            
            <section>
            {/* <div className="centered text-4xl h-screen">This is StationInfo Page</div> */}
                <StationInfomation userid={props.Userid}/>
            </section>
        </React.Fragment>
        
    );
}

export default StationInfo