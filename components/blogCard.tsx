import style from "../styles/BlogCard.module.css";
import { Img } from "react-image";

export default function Blogcard({ meta }) {
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
          <div className={style.description}>{meta.description}</div>
          <div className={style.url}>{meta.url}</div>
        </div>
      </figure>
    </a>
  );
}
