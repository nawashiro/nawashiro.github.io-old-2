import style from "../styles/BlogCard.module.css";
import { Img } from "react-image";
import { Meta } from "../features/Meta";

type Metas = {
  meta: Meta;
};

export default function Blogcard({ meta }: Metas) {
  const domain = meta.url.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];
  const maxLength = 52;
  const description =
    meta.description.length > maxLength
      ? meta.description.slice(0, maxLength) + "…"
      : meta.description;
  return (
    <a href={meta.url} target="_brank" className={style.a}>
      <figure className={style.blogcard}>
        <div>
          <Img
            src={meta.image}
            alt={meta.title}
            width="100px"
            className={style.image}
            unloader={<></>}
          />
          <div className={style.title}>{meta.title}</div>
          <div className={style.description}>{description}</div>
          <div className={style.url}>{domain}</div>
        </div>
      </figure>
    </a>
  );
}
