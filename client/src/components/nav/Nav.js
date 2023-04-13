import { NavLink } from "react-router-dom";
import Search from "../search/Search";


export default function Nav(){

    return (
        <div>
            <nav>
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/create'}>Create pokemon</NavLink>
                <Search />
            </nav>
        </div>
    )
}