import Wrapcontent from "./wrapcontent";
import Nav from "./nav";
import Title from "./title";

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
          <span className="menuico"></span>
          <span className="closeico"></span>
        </p>
      </Wrapcontent>
    </header>
  );
}
