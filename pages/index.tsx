import { format } from "date-fns";
import ja from "date-fns/locale/ja";
import { Fragment } from "react";
import Layout from "../components/layout";
import Content from "../components/content";

function WhatsNewOutput({ date, content }) {
  return (
    <Fragment>
      <dt>
        <time dateTime={date}>
          {format(new Date(date), "y年M月d日", { locale: ja })}
        </time>
      </dt>
      <dd>
        <p>{content}</p>
      </dd>
    </Fragment>
  );
}

type WhatsNewItem = {
  date: string;
  content: string;
};

export default function HomePage() {
  const whatsNews: WhatsNewItem[] = [
    {
      date: "2023-06-28",
      content: "サイト全体をNext.jsで再構築しました。",
    },
    {
      date: "2023-06-20",
      content:
        "「作ったもの」に「ライトニングトーク『分散型SNS Nostrの世界』」を追加しました。",
    },
    {
      date: "2023-06-20",
      content: "ドメインを変更しました。",
    },
    {
      date: "2023-05-18",
      content: "「リンク」でMastodonとMisskeyへのリンクを追加しました。",
    },
    {
      date: "2023-03-22",
      content: "書籍情報共有アプリのバーコード読み取り速度が速くなりました。",
    },
    {
      date: "2023-01-15",
      content: "「作ったもの」で書籍情報共有アプリを公開しました。",
    },
    {
      date: "2022-12-23",
      content: "OGPに対応しました。",
    },
    {
      date: "2022-12-16",
      content: "SSLに対応しました。",
    },
    {
      date: "2022-12-13",
      content: "「作ったもの」に新規項目を掲載しました。",
    },
    {
      date: "2022-12-12",
      content: "サイトを開設しました。",
    },
  ];

  return (
    <Layout title={""}>
      <Content title="ごあいさつ">
        <p>Nawashiroのサイトへようこそ。 ここはNawashiroの個人サイトです。</p>
        <p>趣味の制作物や旅行の写真などを掲載していく予定です。</p>
      </Content>
      <Content title="新着情報">
        <dl className="date-dl">
          {whatsNews.map((whatsNew) => (
            <WhatsNewOutput
              date={whatsNew.date}
              content={whatsNew.content}
            ></WhatsNewOutput>
          ))}
        </dl>
      </Content>
    </Layout>
  );
}
