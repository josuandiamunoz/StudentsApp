import { Outlet } from 'react-router-dom';
import TopBar from '../layout/topbar/TopBar';
import LeftMenu from './leftmenu/LeftMenu';

function Main() {
    return (
        <div>
            <TopBar />
            <LeftMenu />
            <div>
                 <Outlet />
            </div>
        </div>
    );
}

export default Main;