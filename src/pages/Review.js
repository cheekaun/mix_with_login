import React from "react";

import UserReview from "../components/UserReview";

const Review = (props) => {
    return (
        <React.Fragment>
            
            <section>
                <UserReview userid={props.Userid}/>
            </section>
        </React.Fragment>
        
    );
}

export default Review