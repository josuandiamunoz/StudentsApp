import './Main.css';
import { Outlet } from 'react-router-dom';
import Bar from './bar/Bar';
import Menu from './menu/Menu';

function Main() {
    return (
        <div className='main'>
            <div className='top'>
                <Bar />
            </div>
            <div className='bottom'>
                <Menu />
                <Outlet />
            </div>
        </div>
    );
}

export default Main;