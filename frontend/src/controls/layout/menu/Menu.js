
import "./Menu.css";
import { Link } from "react-router-dom";

function LeftMenu() {
    return (
        <div className="left-menu">
            <Link to="students"> Students</Link>
            <Link to="dashboard"> Dashboard</Link>
        </div>
    );
}

export default LeftMenu;