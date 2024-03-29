import React, { createContext, useCallback, useState ,useEffect} from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import NavPage from "./NavPage"

const MainPage = (props) => {
    const id = props.Userid
    console.log(id)
    return(
        
        <React.Fragment>
        
        <div className="">    
            
                <section>
                    <div className="w-absolute">         
                        <Navbar/>
                    </div>
                
                </section>
            
            
            <section>

            
            <div className="grid grid-cols-12" style={{backgroundColor: "#D9D9D9"}}>
            
                        <div className="col-span-3 h-screen  pl-0 md:col-span-2 truncate " style={{backgroundColor: "#D9D9D9" }} >
                        
                            <Sidebar/>
                        </div>
            

                        <div className="col-span-9 bg-white h-screen pl-2 pr-2 md:col-span-10 overflow-y-scroll">  {/* overflow-y-scroll */}
                            <NavPage userid={id}/>
                        </div>
                    </div>
                
            </section>

            </div>
        
        </React.Fragment>
         
    );
}
// Test Add comment from github.com
export default MainPage;

