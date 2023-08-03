import Layout from "../components/layout";
import ContentArticle from "../components/content-article";
import { GetOgp } from "../features/get-ogp";
import Blogcard from "../components/blogCard";
import YouTube from "react-youtube";
import youtubeStyle from "../styles/youtube.module.css";
import slideStyle from "../styles/slide.module.css";

export const getStaticProps = async () => {
  return GetOgp(["https://nawashiro.github.io/"]);
};

export default function HomePage(props) {
  return (
    <Layout title="作ったもの">
      <ContentArticle
        date="2023-7-22"
        title="ライトニングトーク「いろいろな分散型SNS / 分散SNS集会へのいざない」"
      >
        <p>
          VRコミュニティ「エンジニア作業飲み集会」にてライトニングトークに参加しました。
          <br />
          今回はいくつかの分散型SNSの試みについて取り上げました。
          <br />
          また、私が主催する「分散SNS集会」へのいざないを行いました。
        </p>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vSnrCRhrCGxcp4LRx-4FCI8XBrJAe2woYjMR9psXS2KxVM0V8ZPqBY2opa7ZJqjURUjwCf19qelQUqN/embed?start=false&loop=false&delayms=3000"
          frameBorder="0"
          allowFullScreen={true}
          className={slideStyle.iframe}
        ></iframe>
        <YouTube
          videoId="afBsTQCKg-8"
          iframeClassName={youtubeStyle.iframe}
          className={youtubeStyle.youtube}
        />
      </ContentArticle>

      <ContentArticle
        date="2023-6-9"
        title="ライトニングトーク「分散型SNS Nostrの世界」"
      >
        <p>
          VRコミュニティ「エンジニア作業飲み集会」にてライトニングトークに参加しました。
          <br />
          今回は分散型SNSであるNostrについて取り上げました。
        </p>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vRWqSIA4Vrn0ZPEpfuYlSC5cfiTBQMtwulfGlse-aEl1Xbk3PYD0NsqAvSY1gjDuRfxKJHY7StW2IuH/embed?start=false&loop=false&delayms=3000"
          frameBorder="0"
          allowFullScreen={true}
          className={slideStyle.iframe}
        ></iframe>
        <YouTube
          videoId="uV_1eC4ibOY"
          iframeClassName={youtubeStyle.iframe}
          className={youtubeStyle.youtube}
        />
      </ContentArticle>

      <ContentArticle date="2023-1-15" title="書籍情報共有アプリ">
        <p>※サイト移行作業につき非公開</p>
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
