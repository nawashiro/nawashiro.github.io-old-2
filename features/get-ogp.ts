import { Meta } from "./Meta";

const { JSDOM } = require("jsdom");

function noUndefind(item) {
  return item != undefined ? item : "";
}

export async function GetOgp(hrefs: string[]) {
  let metas = {};

  for (let k = 0; k < hrefs.length; k++) {
    const href = hrefs[k];
    const meta = await fetch(href)
      .then((res) => res.text())
      .then((text) => {
        const metaData: Meta = {
          url: href,
          title: "",
          description: "",
          image: "",
        };
        const doms = new JSDOM(text);
        const metas = doms.window.document.getElementsByTagName("meta");

        for (let i = 0; i < metas.length; i++) {
          let pro = metas[i].getAttribute("property");
          if (typeof pro == "string") {
            if (pro.match("title"))
              metaData.title = metas[i].getAttribute("content");
            if (pro.match("description"))
              metaData.description = metas[i].getAttribute("content");
            if (pro.match("image"))
              metaData.image = metas[i].getAttribute("content");
          }
          pro = metas[i].getAttribute("name");
          if (typeof pro == "string") {
            if (pro.match("title"))
              metaData.title = metas[i].getAttribute("content");
            if (pro.match("description"))
              metaData.description = metas[i].getAttribute("content");
            if (pro.match("image"))
              metaData.image = metas[i].getAttribute("content");
          }
        }
        metaData.description = noUndefind(metaData.description);
        metaData.image = noUndefind(metaData.image);
        metaData.title = noUndefind(metaData.title);
        metaData.url = noUndefind(metaData.url);
        return metaData;
      });

    metas[`key${k}`] = meta;
  }
  return { props: JSON.parse(JSON.stringify(metas)) };
}
