import Layout from "../components/layout";
import { GetOgp } from "../features/get-ogp";
import Blogcard from "../components/blogCard";
import Content from "../components/content";
import BlogcardImitation from "../components/blogCardImitation";

export const getStaticProps = async () => {
  return GetOgp([
    "https://gamelinks007.net/@nawashiro",
    "https://misskey.io/@continue5645",
    "https://bookmeter.com/users/1240014",
    "https://vrchat.com/home/user/usr_17e3ef43-2bc7-4dea-b811-12aa6f163f44",
    "https://qiita.com/yineleyici",
    "https://github.com/nawashiro",
  ]);
};

export default function HomePage(props) {
  return (
    <Layout title={"リンク"}>
      <Content title={"Twitter"}>
        <p>主に使用しているTwitterアカウントです。</p>
        <BlogcardImitation
          url={"https://twitter.com/yineleyici"}
          title={"Nawashiro"}
          description={""}
          image={"./images/contents/Twitter social icons - square - blue.svg"}
        />
      </Content>

      <Content title={"読書メーター"}>
        <p>読んだ本をまとめています。たまに感想も書きます。</p>
        <Blogcard meta={props.key2} />
      </Content>

      <Content title={"Mastodon"}>
        <p>主に使用しているActivityPub対応SNSのアカウントです。</p>
        <Blogcard meta={props.key0} />
      </Content>

      <Content title={"Misskey"}>
        <p>たまにこちらにもいます。国産のSNSは貴重なので注目しています。</p>
        <Blogcard meta={props.key1} />
      </Content>

      <Content title={"Qiita"}>
        <Blogcard meta={props.key4} />
      </Content>

      <Content title={"GitHub"}>
        <Blogcard meta={props.key5} />
      </Content>

      <Content title={"VRChat"}>
        <Blogcard meta={props.key3} />
      </Content>
    </Layout>
  );
}
