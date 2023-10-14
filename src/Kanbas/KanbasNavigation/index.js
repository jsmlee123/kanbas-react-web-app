import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBook, FaCreativeCommonsSa } from "react-icons/fa";
import { BsCalendar2Week, BsInboxFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import "bootstrap/dist/css/bootstrap.min.css";

function KanbasNavigation() {
  const links = [
    "Account", 
    "Dashboard",
    "Courses", 
    "Calendar", 
    "Inbox", 
    "History",
    "Studio",
    "Commons",
    "Help"
  ];
  const linksToIconsMap = {
    Account: <MdOutlineAccountCircle className="fs-1 text wd-white" />,
    AccountGray: <MdOutlineAccountCircle className="fs-1 text wd-gray" />,
    Dashboard: <RiDashboard3Line className="fs-1 text" />,
    Courses: <FaBook className="fs-1 text" />,
    Calendar: <BsCalendar2Week className="fs-1 text" />,
    Inbox: <BsInboxFill className="fs-1 text" />,
    History: <AiOutlineClockCircle className="fs-1 text"/>,
    Studio: <FiMonitor className="fs-1 text" />,
    Commons: <FaCreativeCommonsSa className="fs-1 text" />,
    Help: <BiHelpCircle className="fs-1 text" />
  };

  const { pathname } = useLocation();
  return (
    
    <div className="wd-side-bar">
      <img src="../images/northeastern-logo.png"
            class="card-img-top" alt="..."></img>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`${
            pathname.includes(link) && "active"
          }`}
        >
          <div className="col">
            {pathname.includes(link) && link === "Account" ?
              linksToIconsMap["AccountGray"] : linksToIconsMap[link]}
            <span class={`${pathname.includes(link) ? "active" : "wd-white"}`}>
              {link}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
