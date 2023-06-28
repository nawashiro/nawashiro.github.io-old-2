import Header from "./header";
import Footer from "./footer";
import Heroimage from "./heroimage";
import { Fragment } from "react";
import Wrapcontent from "./wrapcontent";
import HeroimageTop from "./heroimageTop";
import Head from "next/head";

export default function Layout({ children, title }) {
  return (
    <Fragment>
      <Head>
        <title>{title ? title : "Nawashiro"}</title>

        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        <meta property="og:title" content={title} />
        <meta property="og:description" content="Nawashiroの個人サイト" />
        <meta property="og:url" content="https://nawashiro.github.io" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://nawashiro.github.io/images/ogp/ogp.jpg"
        />

        {title ? (
          <></>
        ) : (
          <a rel="me" href="https://gamelinks007.net/@nawashiro"></a>
        )}
      </Head>

      <Header />
      {title ? <Heroimage title={title} /> : <HeroimageTop />}

      <Wrapcontent>{children}</Wrapcontent>
      <Footer />
      <div id="page_top">
        <a href="#" className="upico">
          {" "}
        </a>
      </div>
    </Fragment>
  );
}
