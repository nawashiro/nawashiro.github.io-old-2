import Nav from "./nav";
import Wrapcontent from "./wrapcontent";
export default function Heroimage({ title }) {
  return (
    <div id="heroimage">
      <Wrapcontent>
        <h2>{title}</h2>
      </Wrapcontent>
    </div>
  );
}
