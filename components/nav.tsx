import Link from "next/link";
export default function Nav() {
  return (
    <nav>
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
    </nav>
  );
}
