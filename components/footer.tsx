import Link from "next/link";
import Wrapcontent from "./wrapcontent";
import Title from "./title";

export default function Footer() {
  return (
    <footer>
      <Wrapcontent>
        <div className="wrapcol">
          <Title />
          <div className="col-sm-2">
            <div>
              <ul>
                <li>
                  <Link href="./">ホーム</Link>
                </li>
                <li>
                  <Link href="./about-me">私について</Link>
                </li>
                <li>
                  <Link href="./works">作ったもの</Link>
                </li>
                <li>
                  <Link href="./links">リンク</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapcontent>
      <div id="copyright">
        <div className="wrapcopy">
          <small>© 2022 Nawashiro. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
}
