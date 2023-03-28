import React from "react";
import UserVerify from "../components/UserVerifyHistory"

const UserVerifyHistory = (props) => {
    return (
        <React.Fragment>
            
            <section>
            <UserVerify userid={props.Userid}/>
            </section>
        </React.Fragment>
        
    );
}

export default UserVerifyHistory