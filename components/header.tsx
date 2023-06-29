import Wrapcontent from "./wrapcontent";
import Nav from "./nav";
import Title from "./title";
import { IconContext } from "react-icons";
import { IoIosClose, IoIosMenu } from "react-icons/io";

export default function Header() {
  return (
    <header>
      <Wrapcontent>
        <div className="hd-sm-1">
          <Title />
        </div>

        <div className="hd-sm-2">
          <Nav />
        </div>
        <p className="menubtn">
          <IconContext.Provider value={{ size: "2.5rem" }}>
            <IoIosMenu className="menuico" />
            <IoIosClose className="closeico"></IoIosClose>
          </IconContext.Provider>
        </p>
      </Wrapcontent>
    </header>
  );
}
