import { useNavigate } from "react-router-dom";
import "./Bar.css";
import Button from "../../common/button/Button";
import Label from "../../common/label/Label";

function TopBar() {
    const navigate = useNavigate();
    const email = localStorage.getItem("email");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate("/", { replace: true });
    };

    return (
        <div className="top-bar">
            <Label text={`Logged in as ${email}`} className="top-bar-label" />
            <Button text="Log out" onClick={handleLogout} className="top-bar-button" />
        </div>
    );
}

export default TopBar;