import Layout from "../components/layout";
import ContentArticle from "../components/content-article";
import { GetOgp } from "../features/get-ogp";
import Blogcard from "../components/blogCard";
import YouTube from "react-youtube";
import youtubeStyle from "../styles/youtube.module.css";

export const getStaticProps = async () => {
  return GetOgp(["https://nawashiro.github.io/"]);
};

export default function HomePage(props) {
  return (
    <Layout title="作ったもの">
      <ContentArticle
        date="2023-6-9"
        title="ライトニングトーク『分散型SNS Nostrの世界』"
      >
        <p>
          VRChat内コミュニティ「エンジニア作業飲み集会」にてライトニングトークに参加しました。
          <br />
          今回は分散型SNSであるNostrについて取り上げました。
        </p>
        <YouTube
          videoId="uV_1eC4ibOY"
          iframeClassName={youtubeStyle.iframe}
          className={youtubeStyle.youtube}
        />
      </ContentArticle>
      <ContentArticle date="2023-1-15" title="書籍情報共有アプリ">
        <p>※サイト移行作業中につき非公開（2023/6/22）</p>
        <p>書籍情報をツイッターで共有するためのWEBアプリです。</p>
      </ContentArticle>
      <ContentArticle date="2022-12-13" title="個人サイト">
        <p>手始めに作り始めた個人サイトです。</p>
        <p>学生時代に作成したものを元に色々修正して作りました。</p>
        <p>初期はHTMLベタ打ちでしたが、現在はNext.jsにて構築されています。</p>
        <img
          src="./images/landscape_photography/Nawashiro_website_Screenshot.jpg"
          alt="Nawashiro - website"
          loading="lazy"
        />
        <Blogcard meta={props.key0}></Blogcard>
      </ContentArticle>
    </Layout>
  );
}
