import React from "react";
import AllStatistic from "../components/AllStatistic";

const Statistic = (props) => {
    return (
        <React.Fragment>
            
            <section>
            {/* <div className="centered text-4xl h-screen">This is Statistic Page</div> */}
                <AllStatistic userid={props.Userid}/>
            </section>
        </React.Fragment>
        
    );
}

export default Statistic