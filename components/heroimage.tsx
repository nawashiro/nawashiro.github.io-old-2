import Nav from "./nav";
import Wrapcontent from "./wrapcontent";
export default function Heroimage({ title }) {
  return (
    <div id="heroimage">
      <div className="hd-sm-3">
        <Nav />
      </div>
      <Wrapcontent>
        <h2>{title}</h2>
      </Wrapcontent>
    </div>
  );
}
