import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
export default function Wrapcontent({ children }: Props) {
  return <div className="wrapcontent">{children}</div>;
}
