import React from "react";
import { div, NavLink } from "react-router-dom";
import { SidebarData } from "../data/SidebarData";
import { AiOutlineMenu } from 'react-icons/ai'

const Sidebar = () => {
    const activeLink = 'hover:bg-sidebar-hover-gray mt-7 pl-7 w-full h-14 flex justify-start items-center text-black text-2xl space-x-1 font-bold bg-sidebar-hover-gray outline-offset-1'
    const normalLink = 'hover:bg-sidebar-hover-gray pl-7 mt-7 w-full h-14 flex justify-start items-center text-black text-2xl space-x-1 font-bold'
    
    return(
        <React.Fragment>
            <section>
                <div className='text-white' >
                    <div className="pl-7 mt-7 w-90 h-14 flex justify-start items-center text-black text-2xl space-x-1 font-bold">
                    <span><AiOutlineMenu/></span>
                    <span>MENU</span>
                    
                    
                    </div>
                    {
                        SidebarData.map((item, index) => {
                            return(
                                <div key={index}>
                                    <NavLink to={item.path} 
                                    className={({isActive}) => isActive ? activeLink : normalLink}>
                                        <span>{item.icon}</span>
                                        <span>{item.title}</span>
                                    </NavLink>

                                </div>
                            )
                        })
                    }
                    
                </div>
            </section>
        </React.Fragment>
        
    );
}

export default Sidebar