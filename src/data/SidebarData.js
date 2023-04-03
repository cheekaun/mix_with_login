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
      {
        title: "ประวัติการใช้งาน",
        path: "/history",
        icon: <MdAccessTime />,
        
      },

]