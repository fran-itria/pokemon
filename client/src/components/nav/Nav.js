import { NavLink } from "react-router-dom";
import Search from "./search/Search";
import style from "./Nav.module.css";
import { useEffect, useState } from "react";

export default function Nav({ setInit }) {
  const [component, setComponent] = useState('home');
  
  const handleComponent = (event) => {
    setComponent(event.target.name)
  }
  useEffect(() => console.log(component), [component])

  return (
    <div>
      <nav className={component == 'home' ? style.navHome : style.navCreate}>
        <div className={style.inicio}>
          <button onClick={() => setInit(false)} className={style.button}>
            Back
          </button>
        </div>
        <div className={style.home}>
          <NavLink
            to={"/home"}
            className={({ isActive }) => isActive ? style.active : style.disable}
            name="home"
            onClick={(event) => handleComponent(event)}
          >
            Home
          </NavLink>
        </div>
        <div className={style.create}>
          <NavLink
            to={"/create"}
            className={({ isActive }) => isActive ? style.active : style.disable}
            name="create"
            onClick={(event) => handleComponent(event)}
          >
            Create pokemon
          </NavLink>
        </div>
        <Search />
      </nav>
    </div>
  );
}
