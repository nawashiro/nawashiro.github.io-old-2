import { Fragment } from "react";
import Nav from "./nav";
import Wrapcontent from "./wrapcontent";

export default function HeroimageTop() {
  return (
    <Fragment>
      <style jsx>
        {`
          #heroimage {
            background-image: url("/images/landscape_photography/DSC_0070.jpg");
            height: 100vh;
          }
          @media screen and (max-width: 767px) {
            #heroimage {
              height: 70vh;
            }
          }
        `}
      </style>
      <div id="heroimage" style={{ color: "red" }}>
        <div className="hd-sm-3">
          <Nav />
        </div>
        <Wrapcontent>
          <p>撮影場所：長島ダム　大井川旅行にて</p>
        </Wrapcontent>
      </div>
    </Fragment>
  );
}
