import Home8LineIcon from "remixicon-react/Home8LineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import HistoryLineIcon from "remixicon-react/HistoryLineIcon";
import BriefcaseLineIcon from "remixicon-react/BriefcaseLineIcon";
import UserStarLineIcon from "remixicon-react/UserStarLineIcon";
import ContactsBook2LineIcon from "remixicon-react/ContactsBook2LineIcon";


interface NavBarItem {
    icon:  React.ReactNode; // Define icon as a React Node (a JSX element)
    title: string;
    id: string;
  }
export const NavBarData : NavBarItem[] = [
    {
        icon: <Home8LineIcon/>,      
        title:"Home",
        id:'home'
    },
    {
        icon: <UserLineIcon/>,      
        title:"About",
        id:'about'
    },
    
    {
        icon: <HistoryLineIcon/>,      
        title:"Experience",
        id:'experience'
    },
    
    {
        icon: <BriefcaseLineIcon/>,      
        title:"Skills",
        id:'skills'
    },
    {
        icon: <UserStarLineIcon/>,      
        title:"Projects",
        id:'projects'
    },
    {
        icon: <ContactsBook2LineIcon/>,      
        title:"Contact",
        id:'contact'
    },
    
]