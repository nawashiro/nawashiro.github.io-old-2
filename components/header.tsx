import Wrapcontent from "./wrapcontent";
import Nav from "./nav";
import Title from "./title";
import { IconContext } from "react-icons";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const menuico = isActive ? { display: "none" } : { display: "inline" };
  const closeico = isActive ? { display: "inline" } : { display: "none" };
  const hdsm3 = isActive ? { display: "flex" } : { display: "none" };

  return (
    <header>
      <Wrapcontent>
        <div className="hd-sm-1">
          <Title />
        </div>

        <div className="hd-sm-2">
          <Nav />
        </div>

        <button onClick={toggleMenu} className="menubtn">
          <IconContext.Provider value={{ size: "2.5rem", color: "#fff" }}>
            <div style={menuico} className="menu">
              <IoIosMenu className="menuico" />
              メニュー
            </div>
            <div style={closeico}>
              <IoIosClose className="closeico"></IoIosClose>
              閉じる
            </div>
          </IconContext.Provider>
        </button>

        <div className="hd-sm-3" style={hdsm3}>
          <Nav />
        </div>
      </Wrapcontent>
    </header>
  );
}
