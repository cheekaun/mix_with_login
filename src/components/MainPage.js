import React, { createContext, useCallback, useState ,useEffect} from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import NavPage from "./NavPage"

const UseridContext = createContext();
const MainPage = (props) => {

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
                            <NavPage userid={3}/>
                        </div>
                    </div>
                
            </section>

            </div>
        
        </React.Fragment>
         
    );
}
// Test Add comment from github.com
export default MainPage;

