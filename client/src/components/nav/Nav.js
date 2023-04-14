import { NavLink } from "react-router-dom";
import Search from "../search/Search";
import style from './Nav.module.css'


export default function Nav() {

    return (
        <div>
            <nav className={style.nav}>
                <div className={style.home}>
                    <NavLink to={'/home'} className={({ isActive }) => isActive ? style.active : style.disable}>Home</NavLink>
                </div>
                <div className={style.create}>
                    <NavLink to={'/create'} className={({ isActive }) => isActive ? style.active : style.disable}>Create pokemon</NavLink>
                </div>
                <Search />
            </nav>
        </div>
    )
}