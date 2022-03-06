import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <aside className={s.sidebar}>
            <nav className={s.sidebar__nav}>
                <ul className={s.sidebar__ul}>
                    <li className={s.sidebar__navLink}>
                        <NavLink activeClassName={s.active} to="/profile">Profile</NavLink>
                    </li>
                    <li className={s.sidebar__navLink}>
                        <NavLink activeClassName={s.active} to="/dialogs">Messages</NavLink>
                    </li>
                    <li className={s.sidebar__navLink}>
                        <NavLink activeClassName={s.active} to="/news">News</NavLink>
                    </li>
                    <li className={s.sidebar__navLink}>
                        <NavLink activeClassName={s.active} to="/music">Music</NavLink>
                    </li>
                    <li className={s.sidebar__navLink}>
                        <NavLink activeClassName={s.active} to="/settings">Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Navbar