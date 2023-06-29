import Wrapcontent from "./wrapcontent";
import Nav from "./nav";
import Title from "./title";
import { IconContext } from "react-icons";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import style from "../styles/header.module.css";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const menuico = isActive
    ? { opacity: 0, transition: "0.2s" }
    : { opacity: 1, transition: "0.2s" };
  const closeico = isActive
    ? { opacity: 1, transition: "0.2s" }
    : { opacity: 0, transition: "0.2s" };
  const hdsm3 = isActive ? { display: "flex" } : { display: "none" };

  return (
    <header style={style}>
      <Wrapcontent>
        <div className="hd-sm-1">
          <Title />
        </div>

        <div className="hd-sm-2">
          <Nav />
        </div>

        <button onClick={toggleMenu} className="menubtn">
          <IconContext.Provider value={{ size: "2.5rem", color: "#fff" }}>
            <IoIosMenu className="menuico" style={menuico} />
            <IoIosClose className="closeico" style={closeico}></IoIosClose>
          </IconContext.Provider>
        </button>

        <div className="hd-sm-3" style={hdsm3}>
          <Nav />
        </div>
      </Wrapcontent>
    </header>
  );
}
