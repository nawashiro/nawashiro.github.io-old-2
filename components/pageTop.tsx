import { IconContext } from "react-icons";
import { IoIosArrowUp } from "react-icons/io";
import style from "../styles/pageTop.module.css";
import { useEffect, useState } from "react";

export default function PageTop() {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollWindow = () => {
    const top = 100;
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollWindow);
    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);

  const normalStyle = {
    opacity: 0,
    transition: "0.5s",
    pointerEvents: "none",
  };

  const activeStyle = {
    transition: "0.5s",
  };

  const styleView = isButtonActive ? activeStyle : normalStyle;

  return (
    <div className={style.page_top} style={styleView}>
      <button className={style.button} onClick={returnTop}>
        <IconContext.Provider value={{ size: "40px", color: "#fff" }}>
          <IoIosArrowUp className={style.icon} />
        </IconContext.Provider>
      </button>
    </div>
  );
}
