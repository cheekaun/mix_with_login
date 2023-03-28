import React from "react";
import UsageHistory from "../components/UsageHistory";

const UseHistory = (props) => {
    return (
        <React.Fragment>
            
            <section>
                <UsageHistory userid={props.Userid}/>
            </section>
        </React.Fragment>
        
    );
}

export default UseHistory;