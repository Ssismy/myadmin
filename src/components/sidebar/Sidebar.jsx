import "./sidebar.css";
import {AttachMoney, BarChart, ChatBubbleOutline, Feedback, LineStyle,MailOutline,Person,Report,ShowChart,Storefront,Timeline, WorkOutline} from '@mui/icons-material';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <div className="sidebarTitle">Dashboard</div>
                <ul className="sidebarList">
                    <Link to="/" className="link">
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon" />
                        Home
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon" />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <ShowChart className="sidebarIcon" />
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <div className="sidebarTitle">Quick Menu</div>
                <ul className="sidebarList">
                    <Link to="/users" className="link">
                    <li className="sidebarListItem">
                        <Person className="sidebarIcon" />
                        Users
                    </li>
                    </Link>
                    <Link to="/products" className="link">
                    <li className="sidebarListItem">
                        <Storefront className="sidebarIcon" />
                        Products
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <AttachMoney className="sidebarIcon" />
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <BarChart className="sidebarIcon" />
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <div className="sidebarTitle">Notifacations</div>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MailOutline className="sidebarIcon" />
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <Feedback className="sidebarIcon" />
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline className="sidebarIcon" />
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <div className="sidebarTitle">Staff</div>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon" />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <Report className="sidebarIcon" />
                        Reports
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Sidebar
