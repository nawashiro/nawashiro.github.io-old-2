import Layout from "../components/layout";
import Content from "../components/content";

export default function HomePage() {
  return (
    <Layout title={"私について"}>
      <Content title="自己紹介">
        <p>
          VRSNSに入り浸っていたり、ぽちぽちプログラムを書いていたり、本を読んでいたりします。
        </p>
        <p>
          何か作るのが好きです。過去には電子工作をしたり、3DCADをいじったり、豆本を作ったりしていました。
        </p>
        <p>ゲームはALER EGOが好きです。おまえもオ村民になるんだよ！</p>
      </Content>
      <Content title="活動">
        <p>なにか人が見るものを作りたいと思って個人サイトを作りました。</p>
        <p>このサイトは現在Next.jsを使って作られています。</p>
        <p>面白い、あるいはくだらないコンテンツを制作していきたいです。</p>
      </Content>
    </Layout>
  );
}
