import Wrapcontent from "./wrapcontent";
type Props = {
  title: string;
};
export default function Heroimage({ title }: Props) {
  return (
    <div id="heroimage">
      <Wrapcontent>
        <h2>{title}</h2>
      </Wrapcontent>
    </div>
  );
}
