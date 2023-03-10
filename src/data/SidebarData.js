import * as FaIcons from "react-icons/fa";
import {RiFileList3Line} from 'react-icons/ri'
import {MdAccessTime} from 'react-icons/md'

export const SidebarData = [
    {
        title: "หน้าหลัก",
        path: "/home",
        icon: <FaIcons.FaHome/>,
    },
    {
        title: "รายการของคุณ",
        path: "/list",
        icon: <RiFileList3Line />,
      },
    //   {
    //     title: "CSS",
    //     path: "/css",
    //     icon: <FaIcons.FaCss3Alt />,
    //   },
    //   {
    //     title: "Php",
    //     path: "/php",
    //     icon: <FaIcons.FaPhp />,
    //   },
    //   {
    //     title: "Java",
    //     path: "/java",
    //     icon: <FaIcons.FaJava />,
    //   },
     
    //   {
    //     title: "Node",
    //     path: "/node",
    //     icon: <FaIcons.FaNodeJs />,
    //   },
    //   {
    //     title: "Figma",
    //     path: "/figma",
    //     icon: <FaIcons.FaFigma />,
    //   },
      {
        title: "ประวัติการใช้งาน",
        path: "/history",
        icon: <MdAccessTime />,
        
      },
    //   {
    //     title: "React",
    //     path: "/react",
    //     icon: <FaIcons. FaReact />,
       
    //   },

]